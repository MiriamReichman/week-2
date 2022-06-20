import logo from './logo.svg';
import './App.css';
import FilterableProductTable from'./commponent/less6'
import{LogIn}from './commponent/less5';
import {BrowserRouter as Router,Route, Routes}from'react-router-dom';
import { MyCourse } from './commponent/less5#3';
import { Todolist } from './todo_homework/TodoList';
function App() {
  return (
    <div className="App">
      <Todolist></Todolist>
        {/* <LogIn></LogIn>*/}
    {/* <FilterableProductTable></FilterableProductTable> */}
    {/* <Router>
    <Routes>
      <Route path='/MyCourse' component={MyCourse}></Route>
    </Routes>
  </Router> */}
    </div> 
  );
}

export default App;
