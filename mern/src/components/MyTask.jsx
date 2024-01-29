import React from 'react'
import Task from './Task'
import { useState } from 'react'
import { useEffect } from 'react'


export default function MyTask(props) {

    const [myTask,setMyTask] = useState([])
    const user = props.user

    useEffect(()=>{
        fetch('/myTask',{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({user})
        }).then(res=>res.json()).then(data=>{
            setMyTask(data)
        })
    },[])
 
  return (
    <div>
        {myTask.map((val,index)=>{
            return <Task val={val} key={index}/>
        })}

    </div>
  )
}
