import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignIn from './components/SignIn';
import AllTask from './components/AllTask';
import AddTask from './components/AddTask';
import MyTask from './components/MyTask';
import History from './components/History';
import { useState ,useEffect } from 'react';
import Menu from './components/Menu';
import Register from './components/Register';

function App() {


const [hideMenu,setHideMenu] =useState(false)
const[user,setUser]=useState("")
const[tasks,setTasks]=useState([])
const [flag,setFlag] = useState(false)


useEffect(()=>{
  fetch('/getUser').then(res=>res.json()).then(data=>{
    setUser(data)
  })
},[flag])

const addNewUser = (name,password) => {
  let temp = {
    name: name,
    password: password,
  };
  fetch('http://localhost:3001/createUser', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({temp}) 
  })
    .then((res) => res.json())
    .then((data) => {
      alert("User added");
      setFlag(!flag);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }



const addNewTask = (taskName,description,worker) =>{
  let temp ={
    taskName:taskName,
    description:description,
    worker:worker
  }
  fetch('/createTask',{
    method:"post",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({temp})
  }).then(res=>res.json()).then(data=>{
    alert("Task added")
    setFlag(!flag)
  })
}



const showMenu =()=>{
  if(hideMenu){
    <Menu/>
  }
}
  return (
    <div className="App">
 <BrowserRouter>
 {showMenu()}
 <Routes>
  <Route path='/' element={<SignIn setUser={setUser} setHideMenu={setHideMenu}/>}/>
  <Route path='/alltask' element={<AllTask tasks={tasks} flag={flag} setFlag={setFlag}/>}/>
  <Route path='/addtask' element={<AddTask addNewTask={addNewTask}/>}/>
  <Route path='/mytask' element={<MyTask user={user}/>}/>
  <Route path='/history' element={<History/>}/>
  <Route path='/register' element={<Register addNewUser={addNewUser}/>}/>
 </Routes>
 
 
 
 </BrowserRouter>

    </div>
  );
}

export default App;
