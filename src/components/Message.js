import React, {Component} from 'react'
   class Message extends  Component{
       // this use for  state in constructor
       constructor(){
           super()
           this.state = {
               message: 'welcome krishna ji'

           }
       }

       changeMessage() {
           // set new state
           this.setState({
               message: 'i love you krishan ji'
           })
       }
       render(){
           return (
                    <div>
                        <h1> {this.state.message} </h1>
                        <button onClick ={() => this.changeMessage()}>Subscribe</button>
                    </div>)
       }
       // props vaule con't change
   }

   export default Message