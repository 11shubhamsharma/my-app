import React,{Component} from 'react'
import inputRefClassComp from './inputRefClassComp';
 class FocusInputSec extends Component{
     constructor(props){
         super(props)
         this.componentRef = React.createRef()
         
     }
     clickHandler = () =>{
         this.componentRef.current.focusInput()
     }
     render(){
         return(
             <div>
                 <inputRefClassComp ref={this.componentRef}></inputRefClassComp>
                  <button onClick={this.clickHandler}>Focus Input</button>
             </div>
         )
     }
 }
 export default FocusInputSec