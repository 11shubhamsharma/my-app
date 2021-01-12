import React from 'react'
import Person from './Person'

function NameList(){
    // const names = ['kirshna','govinda','gopala']
    // const NameList = names.map(name => <h2>{name}</h2>)
    const persons = [
        {
            id:1 ,
            name: 'krishna',
            place: 'varindavan'
        },
        {
            id:2 ,
            name: 'gopala',
            place: 'varindavan'
        }
    ]
    // const personList = persons.map(person => <h2> jai shri {person.name} may i meet you in {person.place}</h2>
    //     )
    // const personList = persons.map(person => <Person  person={person}/>)
// key and value key use for uniq it is mat be id or name
// a 'key' is special string attribute you need to include when creating list of element
// keys give the element a stabe identity
// key help React identity which items have changed , are added ,or are removed
    const personList = persons.map(person => <Person key={person.id} person={person}/>)
    return(
        // <div>{NameList}</div>
        // <div>
            
        //     {/* <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2> */}
        //     {
        //       names.map(name => <h2>{name}</h2>)
        //     }
        // </div>
        <div>{personList}</div>
    )
}
export default NameList