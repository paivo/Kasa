import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    var names = persons.map((person) => person.name)
    if (names.includes(newName)) {
        window.alert(`${newName} is already added to phonebook`)
        event.preventDefault()
    } else {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    } 
  }
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <AddPersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
        <ShowNumbers personsToShow={personsToShow}/>
    </div>
  )

}

const Filter = (props) => {
  return (
    <div>
      filter shown with:<input value={props.newFilter} onChange={props.handleFilterChange}/>
    </div>
  )
}

const AddPersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.addPerson}>
        name:<input value={props.newName} onChange={props.handleNameChange}/><br></br>
        number:<input value={props.newNumber} onChange={props.handleNumberChange}/><br></br>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

const ShowNumbers = (props) => {
    return (
      <div>
        {props.personsToShow.map((person, i) =>
          <Person key={i} person={person} /> 
        )}
      </div>
    )
}

export default App