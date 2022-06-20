import { useState } from "react";
import { Todoform } from "./TodoForm";
 import { Todo } from "./Todo"
// import Modal from 'react-modal';

export function Todolist(props) {

    const [todo, setTodo] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
   
    const Add = newTask => {

        var addedTask = [newTask, ...todo];

        if (!newTask.text)//אם הגיע ריק שיחזיר
            return;

        if (addedTask.length !== 0) {//בדיקה האם הוא כבר קיים לפתיחת המודל
            for (var i = 1; i < addedTask.length; i++) {
                if (addedTask[i].text === newTask.text) {
                    setModalIsOpen(true);
                }
            }
        }
        console.log(todo);
        setTodo(addedTask);

        console.log(todo);
    };

    const Edit = (taskToEdit) => {

        if (!taskToEdit.text)//אם הגיע ריק שיחזיר
            return;

        setTodo(todo.map((task) => {//מציעת האיבר במערך לו צריך לעדכן את הערך
            if (taskToEdit.id === task.id) {
                task = taskToEdit.id;
            }
        }
        ));
    };

    const Delete = (id) => {
        const remove = [...todo].filter((task) => task.id !== id);
        setTodo(remove);
    };

    const Complete = (id) => {
     
        setTodo(todo.map((task) => {
            if (task.id === id) {
                task.isComplete =!task.isComplete
            }
        }
        ));
    };

    return (
        <div>
            <div className="todo-app">
                <h1>What are the tasks for today?</h1>
                <Todoform  onSubmit={Add}  ></Todoform>
                <Todoform  onSubmit={Edit} toedit={{id:1192,text:"שלום",isComplete:false}} ></Todoform>

              <div className ="todo-container"  >
                   {todo.length>0?
                   <Todo todo={todo} Delete={Delete} Complete={Complete} Edit={Edit}></Todo>
                    :"אין מסימות להציג"}
                     </div>
                {/* <Modal className="modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <h2>Ooops!</h2>
                    <p>It's look like you already add this task...</p>
                    <button onClick={() => setModalIsOpen(false)}>I Know</button>
                </Modal> */}
            </div>
        </div>
    )
}
