import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = (props) => {
  return (
  <div>{props.name} {props.counter}</div>
  )
}

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

const Total = (props) => {
  return (
    <div>
      all {props.good + props.neutral + props.bad}
    </div>
  )
}

const Average = (props) => {
  return (
    <div>
      average {(props.good-props.bad)/(props.good + props.neutral + props.bad)}
    </div>
  )
}

const Positive = (props) => {
  return (
    <div>
      positive {props.good/(props.good + props.neutral + props.bad)} %
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      good {props.good}<br></br>
      neutral {props.neutral}<br></br>
      bad {props.bad}<br></br>
      all {props.good + props.neutral + props.bad}<br></br>
      average {(props.good-props.bad)/(props.good + props.neutral + props.bad)}<br></br>
      positive {100*props.good/(props.good + props.neutral + props.bad)} %
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