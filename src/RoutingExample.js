import React from 'react';
import{ BrowserRouter as Router, Route,Link} from 'react-router-dom'
function RoutingExample(){
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><link to= '/'>Home</link></li>
                        <li><link to= '/about'>About</link></li>
                    </ul>
                    <Route path= '/' componen={Home}/>
                    <Route path= '/about' componen={About}/>

                </div>
            </Router>
        </div>
    )
}

function Home() {
    return(
        <div>
            <h1>Home</h1>
            <p>this is Home page</p>
        </div>
    )
}

function About() {
    return(
        <div>
            <h1>About</h1>
            <p>this is About page</p>
        </div>
    )
}

export default RoutingExample;