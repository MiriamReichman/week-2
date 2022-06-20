import react,{useState} from "react";


//קומפוננטה שתציג Input שלעריכה או הוספה
//הקומפוננטה מקבלת פונקציה של עריכה או הוספה וכן בעריכה אובייקט לעריבה
export function Todoform(props) {
const[Task,setTask]=useState(props.toedit?props.toedit.text:"");//איתחול אובייקט שיכיל לנו את המשתנה שאנחנו נוסיף או נערוך
const handleSubmit = e => {
    e.preventDefault();
    //שליחה לפונקציה הוספה או מחיקה 
    props.onSubmit({
        
        id: Math.floor(Math.random() * 10000),
        text: Task,
        isComplete:false
    }
  );
      console.log(Task);
      setTask('');
};
    return(
        <div>
            <form onSubmit={handleSubmit}  className="todo-form">
                {props.toedit?(
                    <div>
                    <input className="todo-input edit"
                 value={Task}
                 onChange={(e) => setTask(e.target.value)}
                    ></input>
                    <button className="todo-button"
                      onClick={handleSubmit}
                    >edit task</button>
                    </div>
                ):(
                    <div>
                    <input className="todo-input"
                           value={Task}
                           placeholder="add new task"
                           onChange={(e) => setTask(e.target.value)}></input>
                    <button className="todo-button"
                    onClick={handleSubmit}
                    >add task</button>
                    </div>
                )}
            </form>
        </div>
    )

 }