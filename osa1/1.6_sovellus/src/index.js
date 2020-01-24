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
      <h1>
        {props.text}
      </h1>
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
      <Display counter={good} name='good'/>
      
      <Display counter={neutral} name='neutral'/>
      
      <Display counter={bad} name='bad'/>
      
             
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)