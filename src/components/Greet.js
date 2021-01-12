import React from 'react'

// function Greet(){
//     return <h1> hello shri krishan</h1>
// }

//  export const Greet = props=>  {
//      console.log(props)
//      return (
//      <div>
//          <h1> Hello {props.name} {props.heroName}</h1>
//          {props.children}

//      </div>
//      )
     
//  }
 
// export default Greet
// destructuring props and state
// export const Greet = ({name, heroName})=>  {
//     return (
//     <div>
//         <h1> Hello {name} {heroName}</h1>
//     </div>
//     )
    
// }
export const Greet =  props =>  {
    const { name , heroName} = props
    
    return (
    <div>
        <h1> Hello {name} {heroName}</h1>
    </div>
    )
    
}
