import React from 'react'


const UpdatedComponent =( OriginalComponent, incrementnumber )=> {
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementCount = () =>{
            this.setState(prevState => {
                return{count: prevState.count +  incrementnumber}
            })
        }
        render(){
            return<OriginalComponent 
            count = {this.state.count}
            {...this.props}
            incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent