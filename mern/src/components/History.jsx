import React from 'react'
import { useEffect , useState} from 'react'
import Task from './Task'

export default function History() {
  const [historyTask,setHistoryTask] = useState([])

  useEffect(()=>{
    fetch('/getHistory').then(res=>res.json()).then(data=>{
      setHistoryTask(data)
    })
  },[])

  return (
    <div> {historyTask.map((val,index)=>{
      return <Task val={val} key={index}/>
    })}</div>
  )
}
