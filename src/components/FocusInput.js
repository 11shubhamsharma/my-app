import React,{Component} from 'react'
import inputRefClassComp from './inputRefClassComp';
class FocusInput extends Component{
    render(){
        return(
            <div>
                <inputRefClassComp/>
                <button>input focus</button>
            </div>
        )
    }
}
export default FocusInput