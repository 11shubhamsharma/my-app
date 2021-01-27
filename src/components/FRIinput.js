import React from 'react'
// function FRIinput(){
//     return(
//         <div>
//             <input type="text"></input>
//          </div>
//     )
// }

const FRIinput=  React.forwardRef ((props,ref)=>{
    return(
        <div>
            <input type= "text" ref={ref}></input>
        </div>
    )
})

export default FRIinput