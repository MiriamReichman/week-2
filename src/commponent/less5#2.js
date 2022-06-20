import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
//import { MyCourse } from './less5#3';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export function Courses(props) {
    const [mode, setMode] = useState(true);
    const [Courses,setCourses]=useState([]);
   
//     useEffect(
//    console.log(Courses)
// // history.location.push(Courses);
//      ,Courses )
    return (
        <div>
            <button onClick={() => setMode(true)}>Courses</button>  <button onClick={() => setMode(false)}>MyCourse</button>
            <div> {mode ? <div>{props.courses.map((e) => {
                return (
                    <table key={e.name}>
                        <tbody> <tr>

                            <td className="btnStyle">course</td>
                            <td className="changeColor">{e.name}</td>
                            <td className="btnStyle">dec</td>
                            <td className="changeColor">{e.Description}</td>
                            <td className="btnStyle">Date</td>
                            <td className="changeColor">{e.Date}</td>
                            <td> <button onClick={() => {

                                setCourses(Courses.concat(e))}}
                          >register</button></td>
                        </tr>  </tbody></table>
                );
            })}
            </div> : <nav role="navigation">
                <Router> <Link to='/MyCourse'>לקורסים שלי</Link>
                </Router>  </nav>}
            </div>
        </div>
    )

}