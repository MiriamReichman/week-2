import { useState } from "react";
import { Todoform } from "./TodoForm";
export function Todo({ todo, Complete, Delete, Edit }) {
    return (
    

    todo.map((task, index) => (
        <div
     

            className={
                task.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
     

            <div key={task.id} onClick={()=>  Complete(task.id)}>
                {task.text}
            </div>
              <div className="icons">
                      <img alt="remove" src={"C:/Users/HP/Documents/לימודים/שנה ב/קצנלבוגן-react/my-app/src/icons/trash.png"}
                          onClick={() => Delete(task.id)} className="delete-icon" />
                      <img alt="edit" src={"C:/Users/HP/Documents/לימודי/שנה /קצנלבוגן-react/my-app/src/icons/edit.png"}  className="edit-icon"
                          onClick={() =>  <Todoform toedit={{ id: task.id, value: task.text }}  onSubmit={Edit} /> }
                           />
                                  </div>
           
        </div>
    )
    )
    


    ) }
//     return (<div className="todo-container">
//         <div >
//         <h4>you have items ,but we are having truble showing you them...</h4>
//             {todo.map((t)=>{
//                   debugger

//                 return (<div key={t.id}>
//                     {t.text}
//                 </div>)
//             })}

//         </div>

//         {todo.map((task) => {


//                 <div style= "color: #fff"
//                     className={task.isComplte ? 'todo-row complete' : 'todo-row'}
//                     key={task.id} onClick={() => Complite(task.id)}
//                 >

//                     {task.text}    

//             </div>
//                     // <div key={task.id} onClick={() => Complite(task.id)}>  {task.text}</div>


//                     {/* <div className="icons">
//                      <img alt="remove" src={"M:/ריאקט/my-app/src/icons/trash.png"}
//                           onClick={() => Delete(task.id)} className="delete-icon" />
//                      <img alt="edit" src={"M:/ריאקט/my-app/src/icons/edit.png"}
//                           onClick={() => Edit({ id: task.id, value: task.text })} className="edit-icon" />
//                                  </div> */}


//         })}</div>)}
