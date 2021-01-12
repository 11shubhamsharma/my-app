import React ,{Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props)
        this.state = {
            Username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = (event) => 
    { this.setState({
        Username: event.target.value
    })
        
    }
    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.Username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
         const { Username , comments, topic}= this.state
        return(
            // <div>
            //    Jai shri Krishna
            // </div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                      type="text"
                      value={Username}
                      onChange={this.handleUsernameChange}
                     />
                </div>
                <div>
                    <label> Comments</label>
                    <textarea
                     value={comments} 
                      onChange= {this.handleCommentsChange}
                      />
                </div>
                <div>
                    <label>topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value= "ror">ror</option>
                    </select>
                </div>
                <button type="submit">Submit</button>

           </form>    
        )
    }
}
export default Form