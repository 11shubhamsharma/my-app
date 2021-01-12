import React from 'react'

 function Person({person, key}){
     return(
         <div>  
          {key}   <h2> jai shri {person.name} may i meet you in {person.place}</h2>
         </div>
     )
 }
 export default Person