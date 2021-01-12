import React from 'react'
import './myStyles.css'

//  function Stylesheet(){
//      return(
//          <div>
//              <h1 className= 'primary'>Stylesheet</h1>
//          </div>
//      )
//  }

function Stylesheet(props){
    let className = props.primary ? 'primary' : ''
    return(
        <div>
            <h1 className={`${className}font-xl`}>krishanji</h1>
        </div>
    )
}

 export default Stylesheet;