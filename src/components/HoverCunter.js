import React,{Component} from 'react'
import updatedComponent from './withCounter'



class HoverCunter extends Component{
    
    render(){
        const {count,incrementCount} = this.props
        return(<h2 onMouseOver={incrementCount}> check {count} </h2>
        )
    }
}
export default updatedComponent(HoverCunter, 10)