import './less4.css';
import React from 'react';

export function Welcome(props) {
    return <div>
        {/* <Type isLoggedIn={false} ></Type> */}

        <button onClick={() => { <Register /> }}>register</button>
        <button onClick={() => <User />}>LoggedIn</button>
    </div>
}
export function Type(props) {
    const isLoggedIn = props.isLoggedIn
    return (isLoggedIn ? <User /> : <Register />);
}

export function User(props) {
    return <h1>welcome back!</h1>
}
//6:

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: " ", LastName: " ", age: 0, phone: 0, email: " ", password: " " }
        // this.handleSubmit.bind(this);
    }
    // handleSubmit() {
    //     debugger
    //     //{date:new Date().toLocaleTimeString()}
    //     this.setState({
    //         firstName: document.getElementById('nameInput1')
    //         , LastName: document.getElementById('nameInput2')
    //         , age: document.getElementById('numberInput1')
    //         , phone: document.getElementById('numberInput2')
    //         , email: document.getElementById('emailInput')
    //         , password: document.getElementById('passwordInput')
    //     });
    //}
    render() {

        return (<div>
            {/* <form onSubmit={handleSubmit}> */}
                <h1>welcome to our site</h1>
                <p>new User:</p>
                <label>Enter your first name: </label><br></br>
                <input id="nameInput1" type="text" value={this.state.firstName}
                    onChange={(e) => this.setState({
            firstName:(e.target.value)})} /><br></br>
                <label>Enter your last name: </label><br></br>
                <input id="nameInput2" type="text" value={this.state.LastName} 
                     onChange={(e) => this.setState({
                        LastName:(e.target.value)})}/><br></br>
                <label>Enter your age: </label>  <br></br>
                <input id="numberInput1" type="number" value={this.state.age} 
                     onChange={(e) => this.setState({
                        age:(e.target.value)})} /> <br></br>
                <label>Enter your phone nummber: </label>  <br></br>
                <input id="numberInput2" type="phone" value={this.state.phone} 
                     onChange={(e) => this.setState({
                        phone:(e.target.value)})}/> <br></br>
                <label>Enter your email: </label> <br></br>
                <input id="emailInput" type="email" value={this.state.email} 
                     onChange={(e) => this.setState({
                        email:(e.target.value)})} />  <br></br>
                <label>Enter your password:  </label><br></br>
                <input id="passwordInput" type="password" value={this.state.password} 
                     onChange={(e) => this.setState({
                        password:(e.target.value)})} />  <br></br>
                  <button onClick={()=>this.handleSubmit}>רענן נתונים</button>
            {/* </form> */}
         
        </div>)
    };

}




