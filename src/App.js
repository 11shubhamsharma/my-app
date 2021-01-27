import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet'
// for function use this
// import Greet from './components/Greet'
// for const use this and name as same as 

import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import { EventBind } from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import NameList from './components/NameList';
import NameListIndex from './components/NameListIndex';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import Life from './components/Life'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import inputRefClassComp from './components/inputRefClassComp';
import FRIParentinput from './components/FRIParentinput';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCunter from './components/HoverCunter';
import Clickcountertwo from './components/Clickcountertwo';
import HoverCountTwo from './components/HoverCountTwo';
import User from './components/User';
import Countertwo from './components/Countertwo';
import { UserProvider } from './components/userContext';
import ComponentC from './components/ComponentC';
import PostList from './components/PostList';
import PostForm from './components/PostForm';






function App() {
  return (
    <div className="App">
   
     {/* <Stylesheet />
     <Stylesheet primary={false}/>
     <Inline/> */}
    {/* <NameListIndex/> */}
    {/* <NameList></NameList> */}
    {/* <ConditionalRendering/> */}
    {/* <ParentComponent/> */}
    {/* <EventBind/> */}
    {/* <ClassClick/> */}
           {/* <FunctionClick></FunctionClick> */}
           {/* <Greet name= 'krishan' heroName= 'Batman'></Greet> */}
           {/* <Welcome name= 'govind' heroName= 'superman1'  />  */}
             {/* <Counter/> */}
            {/* <Greet name= 'krishan' heroName= 'Batman'>
            <p> This is children props  </p>
            </Greet>
            <Greet name= 'govind' heroName= 'superman'>
            <button> Action</button>
            </Greet>
            <Greet name = 'gopal' heroName= 'newsuper'/>
            <Welcome name= 'govind' heroName= 'superman1'  /> 
            <Welcome  name= 'gopal' heroName= 'superman2'  /> 
            <Welcome  name= 'krishna' heroName= 'superman3'  />  */}
            {/* <Message/> */}

           {/* <Hello/> */}

           {/* <Form/> */}
           {/* <LifecycleA/> */}
           {/* <Life/> */}
           {/* <FragmentDemo></FragmentDemo> */}
           {/* <Table></Table> */}
           {/* <PureComp></PureComp> */}
           {/* <ParentComp/> */}
           {/* <RefsDemo/> */}
           {/* <inputRefClassComp></inputRefClassComp> */}
           {/* <FRIParentinput/> */}
           {/* <ErrorBoundary>
            <Hero heroName="hello"/>
            <Hero heroName="new" />
            <Hero heroName="joker" />
           </ErrorBoundary> */}
           {/* <ClickCounter name='krishna'/>
           <HoverCunter></HoverCunter> */}
           {/* <Clickcountertwo/> */}
           {/* <HoverCountTwo></HoverCountTwo> */}
           {/* <User name={ (isLoggedIn) =>  isLoggedIn ? 'krishna' : "guest "}/> */}
           {/* <Countertwo 
              render={(count,incrementCount) =>(
               <Clickcountertwo count={count} incrementCount={incrementCount}/> 
             )}
             />
             <Countertwo render={(count,incrementCount) =>
             (<HoverCountTwo count={count} incrementCount={incrementCount}/> 
             )}
             /> */}
             {/* <UserProvider  value="krishna">
             <ComponentC></ComponentC>
             </UserProvider> */}
             {/* <PostList/> */}
             {/* <PostForm></PostForm> */}

    </div>
  );
}

export default App;
