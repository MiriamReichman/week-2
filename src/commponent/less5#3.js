import { useEffect, useState } from "react";

export function MyCourse(props) {
  
    const [Courses,setCourses]=useState(props.location.Courses);
    //    useEffect(()=>{
    //     setCourses(this.props.Courses)
    //    },[Courses])
    console.log(Courses);
return(
    <div>
     <h1>fytfuyky8h</h1> 
        {/* <table>{Courses.map((e)=>{
                 return(
                 <div>
                     <tr>
                 <td className="btnStyle">course</td>
                 <td className="changeColor">{e.name}</td>
                 <td className="btnStyle">dec</td>
                 <td className="changeColor">{e.Description}</td>
                 <td className="btnStyle">Date</td>
                 <td className="changeColor">{e.Date}</td>
                 <button onClick={()=>{}}>remove</button>
                 </tr>
                </div>);})}

        </table> */}
    </div>
)
}