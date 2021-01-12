import React,{Component} from 'react'
 class LifecycleB extends Component{
     constructor(props){
         super(props)

         this.state = {
             name: 'Vishwas'
         }
         console.log('LifecycleB constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps ')
         return null
     }

     componentDidMount(){
         console.log('LifecycleB componentDidMount')
     }
// second
     shouldComponentUpdate(){
         console.log('lifecycleB shouldComponentUpdate')
         return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState){
         console.log('LifecycleB getSnapshotBeforeUpdate')
         return null
     }
     componentDidUpdate(){
         console.log('lifeCycleB componentDidUpdate ')
     }
     render(){
         return(
             <div>
               Lifecycle B
             </div>
         )
     }
 }

 export default LifecycleB