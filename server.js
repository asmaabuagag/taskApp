const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("mongoose");
const path = require("path");

const url = "mongodb+srv://asma:123@cluster0.pt20g0c.mongodb.net/taskProjectB7";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "mern/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
db.connect(url)
  .then(() => {
    console.log("DB is on");
  })
  .catch((err) => {
    console.log(err);
  });


const userSchema = new db.Schema({
  username: String,
  password: String,
});

const userModel = db.model("user", userSchema); 

app.post("/createUser",async(req,res)=>{
  await userModel.insertMany(req.body.temp);
  res.json({msg:"added"})
})


app.post("/find", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const result = await userModel.findOne({
    name: name,
    password: password,
  });
  if (result == null) {
    res.json({ msg: "invalid" });
  } else {
    res.json({ msg: "ok", name: result.username });
  }
});

app.get('/getUser',async(req,res)=>{
  const result = await userModel.find();
  res.json(result)
})
app.post('/findUser',async (req,res)=>{
  const name = req.body.name
  const password = req.body.password
  const result = await userModel.findOne({name:name})
  const resultt = await userModel.findOne({password:password})
  if(result == null & resultt == null){
     res.json({msg:"ok"})
  }else{
     res.json({msg:'invalid'})
  }
 })

app.get('/getTask',async(req,res)=>{
  const result = await taskModel.find();
  res.json(result)
})

const taskSchema = new db.Schema({
  taskName: String,
  description: String,
  worker: String,
});

const completedTasks = new db.Schema({
  taskName: String,
  description: String,
  worker: String,
});

const taskModel = db.model("task", taskSchema);
const completedModel = db.model("completed", completedTasks);

// const allowedUsers = [
//   { username: "Eitan", password: 123 },
//   { username: "Ron", password: 123 },
// ];
// userModel.insertMany(allowedUsers);

app.post("/createTask",async(req,res)=>{
  await taskModel.insertMany(req.body.temp);
  res.json({msg:"added"})
})


// const allTasks = [
//     { username: "Eitan", taskName: 123 },
//     { username: "Ron", taskName: 123 },
//   ];

// taskModel.insertMany(allTasks);
 


app.post('/complete',async(req,res)=>{
  const taskName = req.body.taskName
  const result = await taskModel.findOne({taskName})
  await taskModel.deleteOne({taskName})
  await completedModel.insertMany(result)
  res.json({msg:"deleted"})
})

app.get("/task",async(req,res)=>{
    const result = await completedModel.find()
    res.json(result)
})

app.post('/myTask',async(req,res)=>{
    const currentUser = req.body.user
    const result = await taskModel.find({worker:currentUser})
    res.json(result)
})


app.get("/getHistory",async(req,res)=>{
  const result = await completedModel.find()
  res.json(result)
})





  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'mern/build', "index.html"))
})


app.listen(3001,()=>{
    console.log("Server run in port 3001")
})