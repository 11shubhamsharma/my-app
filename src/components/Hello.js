import React from 'react'


const Hello = () => {
    // with jsx
    // return(
    //     <div className= 'dumyclass'>
    //         <h1>jai shri krishna</h1>
    //     </div>
    // )
    // without jsx is very complicated 
    return React.createElement('div', {id: 'hello', className: 'dummyclass'},null,<h1> jai shri krishna</h1>)
    // mininmun need three params first params string need  render html tag
    // 2 need optional properities when not need pass null 3 params childern of html elemet
}
export default Hello

// difference between jsx use camelcase