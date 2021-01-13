import React ,{Component} from 'react';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {qty: 0 }
    }
    updateQty = () =>(
        this.setState((state) => (
            {qty: state.qty + 1}
        ))
    )
    componentDidMount(){
            console.log('execute after component render')
        }
    componentDidUpdate(prevProps,prevState){
        console.log('Component')

    }
    render(){
        return(
            <div>
                <h2>
                   here {this.state.qty}
                </h2>
                <button onClick={this.updateQty}>click</button>
            </div>
        )
    }
}

export default Cart;
