import React, {Component} from 'react'

export class ConditionalRendering extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false

        }
    }
    render(){
// last one

    return this.state.isLoggedIn && <div>jai shri krishna</div>

 //third
  
        // return this.state.isLoggedIn ?
        //  (<div> jai shri krishan</div>) :
        //  (<div>jai shri gopal</div>)

//second

    //  let message
    //  if (this.state.isLoggedIn){
    //      message = <div>jai shri krishna</div>
    //  }
    //  else{
    //     message = <div>jai shri gopal</div>
    //  }

    //  return <div>{message}</div>




//first
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>
        //            mere krishna ji
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             jai shri krishan
        //         </div>
        //     )
        // }

    }
}

export default ConditionalRendering