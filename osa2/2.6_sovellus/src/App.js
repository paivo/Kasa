import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
      })
  }, [])

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService.remove(person.id)
      setPersons(persons.filter(person2 => person2.id !== person.id))
      setErrorMessage(
        `Removed ${person.name}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)  
    }
  }

  const changeNumber = (id, changedNumber) => {
    const person = persons.find(n => n.id === id)
    const changedPerson = { ...person, number: changedNumber }
    console.log(changedPerson)
    personService.update(id, changedPerson).then(response => {
      setPersons(persons.map(pers => pers.id !== id ? pers : response.data))
    })
  }

  const addPerson = (event) => {
    var names = persons.map((person) => person.name)
    if (names.includes(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const currentId = persons.find(n => n.name === newName).id
        changeNumber(currentId, newNumber)
        setErrorMessage(
          `Changed ${newName}s number`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)          
      } else {
          event.preventDefault()
      }
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
        setErrorMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)          
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

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
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

const Person = ( {person, removePerson} ) => {
  return (
    <div>
      {person.name} {person.number} 
      <button onClick={() => removePerson(person)}>
        delete
      </button>
    </div>
  )
}


export default App