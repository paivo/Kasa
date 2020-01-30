import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {    
      return (
        
        <div>
          <Header name={props.course.name}/>
          <Content course={props.course} />
          <Total course={props.course} />
        </div>
      )
  }
  

const Header = (props) => {
    return (
      <div>
        <h1>
          {props.name}
        </h1>
      </div>
    )
}

const Content = (props) => {  
    return (
      <div>
        {props.course.parts.map(part => <Part key={part.name} part={part} />) }
      </div>
    )
}

const Part = (props) => {    
    const fieldName = 'name' 
    return (
        <div>
          {props.part["name"]} {props.part.exercises}
        </div>
    )
  }


const Total = (props) => {
    var totalAmount = props.course.parts.reduce((sum,part) => sum + part.exercises,0)

    return (
      <div>
        <b>total of {totalAmount} exercises</b>
      </div>
    )
}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return (
      <div>
        <Course course={course} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))