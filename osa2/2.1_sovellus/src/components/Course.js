import React from 'react'

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

export default Course