import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const VoteButton = (props) => {
  if (props.which === 0) {
    return (<button onClick={props.o}>
              vote
            </button>)
  } else if (props.which === 1) {
    return (<button onClick={props.t}>
      vote
    </button>)
  } else if (props.which === 2) {
    return (<button onClick={props.tr}>
      vote
    </button>)
  }else if (props.which === 3) {
    return (<button onClick={props.f}>
      vote
    </button>)
  }else if (props.which === 4) {
    return (<button onClick={props.fi}>
      vote
    </button>)
  }else {
    return (<button onClick={props.s}>
      vote
    </button>)
  }
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

const Vote = (props) => {
  if (props.which === 0) {
    return (<div>has {props.one} votes</div>)
  } else if (props.which === 1) {
    return (<div>has {props.two} votes</div>)
  } else if (props.which === 2) {
    return (<div>has {props.tre} votes</div>)
  }else if (props.which === 3) {
    return (<div>has {props.four} votes</div>)
  }else if (props.which === 4) {
    return (<div>has {props.five} votes</div>)
  }else {
    return (<div>has {props.six} votes</div>)
  }
}

const App = (props) => {
  const [rand, setRand] = useState(Math.floor(Math.random() * 6))
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [tre, setTre] = useState(0)
  const [four, setFour] = useState(0)
  const [five, setFive] = useState(0)
  const [six, setSix] = useState(0)
  
  const newRand  = () =>  setRand(Math.floor(Math.random() * 6))
  const increaseByOneGood = () => setGood(good + 1)
  const increaseByOneNeutral = () => setNeutral(neutral + 1)
  const increaseByOneBad = () => setBad(bad + 1)

  const increaseByOneOne = () => setOne(one + 1)
  const increaseByOneTwo = () => setTwo(two + 1)
  const increaseByOneTre = () => setTre(tre + 1)
  const increaseByOneFour = () => setFour(four + 1)
  const increaseByOneFive = () => setFive(five + 1)
  const increaseByOneSix = () => setSix(six + 1)
     
  const feedback = 'give feedback'
  const stats = 'statistics'
  const anecdoteoftheday = 'Anecdote of the day'

  return (
    <div>
      <Header text={anecdoteoftheday} />
      {props.anecdotes[rand]}<br></br>
      <Vote one={one} two={two} tre={tre} four={four} five={five} six={six} which = {rand}/>
      <VoteButton o={increaseByOneOne} t={increaseByOneTwo} tr={increaseByOneTre} f={increaseByOneFour} fi={increaseByOneFive} s={increaseByOneSix} which = {rand}/>
              
      <Button
        handleClick={newRand}
        text='next anecdote'
      />
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

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)