import React ,{Component} from 'react';
import Cart from './Cart';

 export class Life extends Component{
     constructor(props){
      super(props);
      this.state = {lifeid: '',qty: 0, iscart: true}
     }
     addToCart = (lid) => (
         this.setState((state) => (
             {lifeid: lid, qty: state.qty + 1}
         ))
     )
     removeCart = ()=> (
         this.setState({iscart: false})
     )
    render(){
        return(
             <div>
                <button onClick={() => this.addToCart(1)}>add to cart</button>
                <button onClick={() => this.addToCart(2)}> add to cart</button>
                <button onClick={() => this.addToCart(3)}>add to cart</button>
                {this.state.iscart && <Cart lifeid={this.state.lifeid} qty={this.state.qty}/>}
                {!this.state.iscart && <h2>cart has been removed</h2>}
                <button onClick = {this.removeCart}>remove cart</button>
            </div>
        );
    }
}
export default Life;