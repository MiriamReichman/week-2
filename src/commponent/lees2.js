import React, { useState } from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
// 21
//1./2.	בני קומפוננטה המקבלת בפרופס מספר 
// //ובעת לחיצה על כפתור "הכפל" מכפילה אותו ב10 ומציגה על המסך 

export class Mult extends React.Component {
    constructor(props) {
        super(props)
        this.state = { number: props.num }

    }

    Multu = () => { this.setState({ number: (this.state.number * 10) }) }

    Div = () => { this.setState({ number: (this.state.number / 10) }) }

    Add = () => { this.setState({ number: (this.state.number * 1 + 10) }) }

    render() {
        return (
            <div>
                <button onClick={this.Multu}>FOR MULT</button>
                <button onClick={this.Div}>FOR Div</button>
                <button onClick={this.Add}>FOR Add</button>
                <h1>{this.state.number}</h1>
            </div>
        );
    }
}
//3.	2 בני קומפוננטת מחשבון המקבלת כקלט 
// מספרים ומציגה את התוצאה בלחיצה על "תוצאה"

export class Calculater extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: props.num1,
            num2: props.num2,
            res: 0
        }

    }
    Multu = () => { this.setState({ res: (this.state.num1) * (this.state.num2) }) }
    Div = () => { this.setState({ res: (this.state.num1) / (this.state.num2) }) }
    Add = () => { this.setState({ res: (this.state.num1 * 1) + (this.state.num2 * 1) }) }
    Sub = () => { this.setState({ res: (this.state.num1) - (this.state.num2) }) }
    render() {
        return (
            <div>
                <button onClick={this.Multu}>FOR MULT</button>
                <button onClick={this.Div}>FOR Div</button>
                <button onClick={this.Add}>FOR Add</button>
                <button onClick={this.Sub}>FOR Add</button>
                <h1>{this.state.res}</h1>
            </div>
        );
    }
}
//4
//4.	בני כפתור שבעת לחיצה עליו מחליף צבע בין כחול לאדום ולהיפך
export class ColorChange extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isRed: true };

        this.handleColor = this.handleColor.bind(this);
    }
    handleColor() {
        this.setState(ptevState => ({
            isRed: !ptevState.isRed
        }));
    }

    render() {
        return (
            <button onClick={this.handleColor}>
                {this.state.isRed ? document.getElementById('root').style.backgroundColor = 'red'
                    : document.getElementById('root').style.backgroundColor = 'blue'}
            </button>
        )
    }
}
//5
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        debugger
        this.state = { date: new Date().toLocaleTimeString() }

    }
    componentDidMount() {
        debugger
        this.timerId = setInterval(
            () => this.setState({ date: new Date().toLocaleTimeString() }), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                <h1>it is {this.state.date}</h1>
            </div>
        )
    }
}
reactDom.render(
    <Clock />,
    document.getElementById('root')
);
// 6
// 6.	צרי טופס מעוצב להרשמה המכיל: שם פרטי, שם משפחה, טלפון, מייל, סיסמה וכפתור רישום שבעת 
// לחיצה עליו יעבור לעמוד חדש ויציג למשתמש שנרשם את כל הפרטים שהכניס

export function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(`The name you entered was: ${name}`);
        <Show name='${name}'></Show>
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input className="nameInput"
                    type="text" value={name}
                    onChange={(e) => setName(e.target.value)} />
                <br></br>
            </label>
            <label>Enter your phone number: </label>
            <input className="numberInput" type="number" /> <br></br>
            <label>Enter your mail: </label>
            <input className="mailInput" type="mail" />  <br></br>
            <label>Enter your password:  </label>
            <input className="passwordInput" type="password" />  <br></br>
            <input type="submit" />
        </form>
    )
}
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: props.name }

    }
    render() {
        return (
            <div>
                <h1>it is {this.state.name}</h1>
            </div>
        )
    }
}
