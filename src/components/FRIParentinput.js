import React ,{Component} from 'react'
import FRIinput from './FRIinput';
 class FRIParentinput extends Component{
     constructor(props){
         super(props)
         this.inputRef = React.createRef()
     }
     onClickHandler = () =>{
         this.inputRef.current.focus()
     }
     render(){
         return(
             <div>
                 <FRIinput ref={this.inputRef}></FRIinput>
                 <button onClick={this.onClickHandler}>focus input</button>
                 
             </div>
         )
     }
 }
 export default FRIParentinput