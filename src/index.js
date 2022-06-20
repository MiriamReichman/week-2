import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//  import App from './App';
import ShoppingList from "./example1";
import reportWebVitals from './reportWebVitals';
import Name from "./commponent/less1";
import Food from "./commponent/less1";
import Student from "./commponent/less1";
import StudentList from "./commponent/less1";
import StudentFromCop from "./commponent/less1";
import StudentArray from "./commponent/less1"
// import { Mult ,Calculater,ColorChange,Clock,MyForm} from './commponent/lees2';
import{Welcome,Type}from './commponent/less4';
import{LogIn}from './commponent/less5';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
  <App />
  {/* <LogIn></LogIn> */}
    {/* <Mult num="10"/> */}
   {/* <Calculater num1="3" num2="4"/> */}
   {/* <ColorChange></ColorChange> */}
   {/* <Clock/> */}
   {/* <MyForm></MyForm> */}
    {/* <Name/>
    <Food/>
    <Student/>
    <StudentList name="avi"/>
    <StudentArray name={["avi","sara","David"]}/>
    <StudentFromCop/>
    {/* <ShoppingList/> */}
    {/* שיעור 4: */}
   {/* <Welcome/> */}
   {/* <Type isLoggedIn={false} ></Type> */}
   {/* <LogIn></LogIn> */}
  </React.StrictMode>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
