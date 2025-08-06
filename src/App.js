import logo from './logo.svg';
import './App.css';
import FunctionComp from './components/FunctionComp';
import ClassComp from './components/ClassComp';
import HoverComp from './components/HoverComp'
import MyDetailComp from './Task/Task1';
import FriendsDetailComp from './components/Task2';
import MyStateComp from './components/MyStateComp';
import MyImagesComp from './components/MyImagesComp';
import ParentComp from './components/ParentComp';
import CounterTaskComp from './Task/CounterTaskComp';
import ConditionalRenComp from './components/ConditionalRenComp';
import CssComp from './components/CssComp';
import ListComp from './components/ListComp';
import ClickCounterComp from './components/ClickCounterComp';
import HoverCounterComp from './components/HoverCounterComp';
import UserComp from './components/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <h2>Welcome You All In Hematite Infotech Pvt Ltd.</h2> */}
      {/* <FunctionComp></FunctionComp> */}
      {/* <FunctionComp name="Akshay" address="Pune" />
      <ClassComp  name="Vivek" address="Mumbai"/> */}
     {/* <HoverComp/>
     <MyDetailComp name="Vivek Kisan Salunke" no="6565" gender="Male" add="pune" />
     <FriendsDetailComp name="Akshya Rajabhau Kanade" no="5454" gender="Male" add="mumbai"/>

     <MyStateComp city="Pune" pin={411014} country="India"/>
     <MyImagesComp /> */}
     {/* <ParentComp/> */}
     {/* <CounterTaskComp/> */}
     {/* <ConditionalRenComp/> */}
     {/* <CssComp/> */}
     {/* <ListComp/> */}
     {/* <ClickCounterComp/>
     <HoverCounterComp/> */}
     <ErrorBoundaryComp>
         <UserComp name="Akshay"/>
     </ErrorBoundaryComp>
     <ErrorBoundaryComp>
         <UserComp name="Vivek"/>
     </ErrorBoundaryComp>
     <ErrorBoundaryComp>
         <UserComp name="Rahul"/>
     </ErrorBoundaryComp>
     <ErrorBoundaryComp>
         <UserComp name="Nitesh"/>
     </ErrorBoundaryComp>
     
     {/* <UserComp name="Vivek"/>
     <UserComp name="Rahul"/>
     <UserComp name="Nitesh"/> */}
    </div>
  );
}

export default App;
