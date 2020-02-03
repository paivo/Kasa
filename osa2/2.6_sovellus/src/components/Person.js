import React from 'react'

const Person = ( {person, remove} ) => {
  console.log(person)
  return (
    <div>
      {person.name} {person.number} 
      <button onClick={() => remove(person.id)}>
        delete
      </button>
    </div>
  )
}

export default Person