import React ,{Component} from 'react'

export class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'hello'
        }
        // for third approch maximun use
        this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message: 'krishan......'
    //     })
    //     console.log(this)
    //     // when you not bind this this is undefine show in here into logs
    // }
                    // both approch is working fine
    // for fourth approch maximun use
    clickHandler = () => {
        this.setState({
            message: 'krishan ji'
        })
    }
    render(){
        return(
            <div>
                <div> {this.state.message}</div>
              {/* <button onClick={this.clickHandler.bind(this)}> button now </button> */}
              {/* <button onClick={() => this.clickHandler()}> button now </button> */}
              <button onClick={this.clickHandler}> button now </button>

            </div>
        )
    }
}