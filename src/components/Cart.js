import React ,{Component} from 'react';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state = {qty: this.props.qty}
    }
    // when depend on props then change
    static getDerivedStateFromProps(props, state){
        if(props.qty!== state.qty){
        return{qty: props.qty}
        }
        return null;
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.qty !== nextProps.qty){
            console.log("should component  updated")
            return true;
        }
        return false;

    }
    // updateQty = () =>(
    //     this.setState((state) => (
    //         {qty: state.qty + 1}
    //     ))
    // )
    componentDidMount(){
            console.log('execute after component render')
        }
    componentDidUpdate(prevProps,prevState){
        if(this.props.lifeid !== prevProps.lifeid){
            console.log('Component updated')
 
        }

    }
    componentWillMount(){
        console.log("component destory")
    }
    render(){
        return(
            <div>
                <h2>
                   here {this.state.qty}
                </h2>
            </div>
        )
    }
}

export default Cart;
