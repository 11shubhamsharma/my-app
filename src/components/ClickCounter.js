import React ,{Component} from 'react'
import updatedComponent from './withCounter'

class ClickCounter extends Component{
    
    render(){
        const {count,incrementCount} = this.props
        return<button onClick={incrementCount}> {this.props.name} Click {count} time</button>
    }
}
export default updatedComponent(ClickCounter, 5)