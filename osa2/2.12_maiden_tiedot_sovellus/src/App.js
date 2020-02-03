import React, { useState, useEffect } from 'react'

const App = () => {
  const [persons, setPersons] = useState([]) 


  useEffect(() => {
    personService
    .getAll()
    .then(response => {
      setPersons(response.data)
      })
  }, [])
 
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
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


export default App