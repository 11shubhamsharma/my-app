import React from 'react'

function NameListIndex(){
    const names = ['Krishanji','Gopal ji']
    // same time name is same so not use as key , use index as key
    // use when the items in your list do not have a unique id
    // the list is a static list and will not change
    //the  list will never be reordered or filtered

    const nameListIndex = names.map((name, index) => <h2 key={index}> {index}{name}</h2> )
    return<div>{nameListIndex}</div>

}
export default NameListIndex