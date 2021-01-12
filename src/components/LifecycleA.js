import React,{Component} from 'react'
import LifecycleB from './LifecycleB';
 class LifecycleA extends Component{
     constructor(props){
         super(props)

         this.state = {
             name: 'Vishwas'
         }
         console.log('LifecycleA constructor')
     }

     static getDerivedStateFromProps(props,state){
         console.log('LifecycleA getDerivedStateFromProps ')
         return null
     }

     componentDidMount(){
         console.log('LifecycleA componentDidMount')
     }
     // second
     shouldComponentUpdate(){
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycles getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('lifeCycle componentDidUpdate ')
    }
    changeState = ( ) => {
        this.setState(
            {
                name: 'jai'
            }
        )
    }
     render(){
         return(
             <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeState} >chnage state</button>
                <LifecycleB/>
             </div>
         )
     }
 }

 export default LifecycleA