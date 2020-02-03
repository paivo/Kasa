import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
      })
  }, [])

  const removePerson = (person) => {
    if (window.confirm('Delete ', person.name, '?')) {
      personService.remove(person.id)
      setPersons(persons.filter(person2 => person2.id !== person.id))
    }
  }

  const addPerson = (event) => {
    var names = persons.map((person) => person.name)
    if (names.includes(newName)) {
        window.alert(`${newName} is already added to phonebook`)
        event.preventDefault()
    } else {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')

        personService
          .create(personObject)
          .then(response => {
            setPersons(persons.concat(response.data))
            setNewName('')
            setNewNumber('')
          })
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
      <ShowNumbers personsToShow={personsToShow} removePerson={removePerson}/>
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
        {props.personsToShow.map((person) =>
          <Person key={person.id} person={person} removePerson={props.removePerson} /> 
        )}
      </div>
    )
}

export default App