import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Register(props) {

    const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  

  const nav = useNavigate();

  const handleFind = () => {
    let count = 0;
    let masseg = ""

    fetch("http://localhost:3001/findUser", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name:name ,password:password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "invalid") {
            masseg+=("you can to change your name and password\n");
        } else {
            count++;
            masseg+=("name is ok\n");
        }

       if(count === 1){
      props.addNewUser(name, password);
      nav("/");
    }else{
        alert(masseg)
    }
}).catch((error)=>{
    console.error("Error",error)
  })
}

  const hand =()=>{
    handleFind()
  }

    
  return (
    <div>
        
        <div className="div">
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="write your name"
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
  
  
        <input
          type="text"
          placeholder="write your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button onClick={hand}>Register</button>
        
      </div>
        
        </div>
  )
}
