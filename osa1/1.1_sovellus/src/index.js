import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
        <h1>
          {props.course}
        </h1>
      </div>
    )
}

const Content = (props) => {
  console.log(props)
    return (
      
      <div>
        <Part part={props[1]} />
        <Part part={props[1]} />
        <Part part={props[1]} />
      </div>
    )
}

const Part = (props) => {
    const fieldName = 'name' 
    return (
      <div>
        <p>
          
          {props.part[fieldName]} {props.part[1]}
        </p>
      </div>
    )
  }

const Total = (props) => {
    return (
      <div>
        <p>
        Number of exercises {props.total}
        </p>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))