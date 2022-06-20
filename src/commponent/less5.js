import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { Courses } from './less5#2';
export function LogIn() {
    const user = {
        userName: "Avi",
        password: 1
    };
    const [userName, setUserName] = useState("Avi");
    const [password, setPassword] = useState(1);
    const [flag, setFlag] = useState(false);


    useEffect(()=>{
debugger
    },[])

    const Valid = () => {
        if (user.userName == userName)
            if (user.password == password) {
                alert("password is good!!!")
                setFlag(true);

            }
    };
    return (
        <div>


            <label>Enter your name:  </label>
            <input className="nameInput" type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <br></br>

            <label>Enter your password:  </label>
            <input className="passwordInput" type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            <br></br>
            <button onClick={() => Valid()}>log in</button>

            <div> {flag ? <Courses courses={[{ name: "English", Description: "Porfetional English", Date: '00/00/00' },
            { name: "math", Description: "Porfetional math", Date: '00/00/00' },
            { name: "bybel", Description: "Porfetional bybel", Date: '00/00/00' },
            { name: "geografy", Description: "Porfetional geografy", Date: '00/00/00' },
            { name: "java", Description: "Porfetional java", Date: '00/00/00' },
            { name: "python", Description: "Porfetional python", Date: '00/00/00' }]
            } /> : " "}</div>

        </div>

    );
}