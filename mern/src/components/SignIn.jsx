import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignIn(props) {
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
const nav = useNavigate()

    const checkRegisteredUser =() =>{
        fetch('http://localhost:3001/find',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,password})
        }).then(res=>res.json()).then(data =>{

            if(data.msg === "ok"){
                props.setUser(data.name)
                props.setHideMenu(true)
                nav('/alltask')
                alert(`Welcome back ${name}`)
            }else{
                alert("incorrect user")
                nav("/register")
            }
        })
    }
    

    
    
    const clickHandler = () =>{
        checkRegisteredUser()
    }



  return (
    <div>
<h1>Sign in</h1>
<input type='text' onChange={(e)=>setName(e.target.value)}/>
<input type='password' onChange={(e)=>setPassword(e.target.value)}/>
<button onClick={clickHandler}>Sign in</button>
    </div>
  )
}
