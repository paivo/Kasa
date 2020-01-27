import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  return (
    <div>
      <h2>
        {props.text}
      </h2>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>
        {text} {value}
      </td>
    </tr>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value ={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={all} />
          <StatisticLine text="average" value ={(props.good-props.bad)/all} />
          <StatisticLine text="positive" value ={100*props.good/all + ' %'} />
        </tbody>
      </table>
    </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)
  const feedback = 'give feedback'
  const stats = 'statistics'

  return (
    <div>
      <Header text={feedback} />
      <Button
        handleClick={increaseByOneGood}
        text='good'
      />
      <Button
        handleClick={increaseByOneNeutral}
        text='neutral'
      />
      <Button
        handleClick={increaseByOneBad}
        text='bad'
      />
      <Header text={stats} />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)