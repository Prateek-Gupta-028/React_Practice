import React from 'react'
import Person from './Person'

function NewList() {
    const persons = [
        {
            id:1,
            name:'ansh',
            age:20,
            skill:'C++'
        },
        {
            id:2,
            name:'eshan',
            age:25,
            skill:'java'
        },
        {
            id:3,
            name:'harsh',
            age:26,
            skill:'python'
        }
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)
  return <div>{personList}</div>
  
}

export default NewList