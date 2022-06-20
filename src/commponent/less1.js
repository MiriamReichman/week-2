import React from 'react';
import ReactDOM from 'react-dom';
// 1:
export function Name() {
    return <h1>miriam and yehudit</h1>
}

// 2:
export class Food extends React.Component {
    render() {
        return (
            <div className="food">
                <h1>food List </h1>
                <ul>
                    <li>Milk</li>
                    <li>Bread</li>
                    <li>bannana</li>
                </ul>
            </div>
        );
    }
}

//4:
// func:
export function Student() {
    return <div>
        <StudentList name="avi"></StudentList>
        <StudentList name="sara"></StudentList>
        <StudentList name="tova"></StudentList>
    </div>
}

export function StudentList(props) {
    return <h1>{props.name}</h1>
}

export default class StudentFromCop extends React.Component {
    render() {
        return (
            <ul>
                <li><StudentList name="avi"></StudentList></li>
                <li> <StudentList name="sara"></StudentList></li>
                <li><StudentList name="tova"></StudentList></li>
            </ul>
        );
    }
}
//5:
// export function StudentArray(){
//     return <div>

//         <StudentList name="avi"></StudentList>
//         <StudentList name="sara"></StudentList>
//         <StudentList name="tova"></StudentList>
//         </div>
//     }

//6:

class clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date().toLocaleTimeString() }
        //this.state=props
    }
    render() {
        return (
            <div>
                {/* <h1>it is {this.State.date</h1> */}
            </div>
        )
    }
}
function time() {
    const element = (
        <div>
            <h1>it is {new Date().toLocaleTimeString()}.</h1>
        </div>
    );
    // ReactDOM.render(element, document.getElementById('root'));
}
// setInterval(time, 1000);

//7
function Component(props) {
    return (
        <div className="">

        </div>
    )
}