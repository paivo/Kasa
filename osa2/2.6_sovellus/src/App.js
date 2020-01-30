import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) => {
    var names = persons.map((person) => person.name)
    if (names.includes(newName)) {
        window.alert(`${newName} is already added to phonebook`)
        event.preventDefault()
    } else {
        event.preventDefault()
        const personObject = {
            name: newName
        }
        setPersons(persons.concat(personObject))
        setNewName('')
    }
    
    
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        name:<input value={newName} onChange={handlePersonChange}/>
        <br></br>
        <button type="submit">add</button>
      </form> 
      <h2>Numbers</h2>
        {persons.map((person, i) =>
          <Person key={i} person={person} /> 
        )}
    </div>
  )

}

export default App