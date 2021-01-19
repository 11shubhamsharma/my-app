import React,{PureComponent} from 'react'
import { isPrimitive } from 'util';

 class PureComp extends PureComponent{

    render(){
        console.log('******************Pure comp render**************')
           // render one time
        return(
            <div>
                PureComponent {this.props.name}
              
            </div>
        )
    }
}
export default PureComp

// shallow comparison
//Primitive type
// a (sc) b return true if a snd b have the same value and are of the same type
//EX. string 'krishan'(sc) string 'krishan' return true

//complex
//a (sc ) b return true if a and b reference the exact same object
//var a = [1,2]
//var b =[1,2]
//var c= a;
// var ab_eq = (a ===b);//false
//var ac_eq = (a ===c); //true

//var a = [x = 1,y = 2]
//var b =[x = 1, y = 2]
//var c= a;
// var ab_eq = (a ===b);//false
//var ac_eq = (a ===c); //true



// a pure component implmements shouldcomponentupdate with a shallow props and state
//sc of prevstate with currentstate
//sc of prevprops with currentprops..
// previous state and current state same then no render


