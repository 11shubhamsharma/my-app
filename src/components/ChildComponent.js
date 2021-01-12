import React from 'react'

function ChildComponent(props){
    return(
        <div>
          {/* <button onClick={props.greetHandler}>Krishna ji i love you , i love you so much </button> */}
          <button onClick={() =>props.greetHandler('child')}>Krishna ji i love you , i love you so much </button>

        </div>
    )
}

export default ChildComponent