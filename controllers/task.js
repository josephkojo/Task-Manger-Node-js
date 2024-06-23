const databaseSchema = require('../db/models')



const getAllTask = async(req, res, next) =>{
  try{

    const tasks = await databaseSchema.find({});
    res.status(200).json({tasks})

  }catch(err){
    res.status(500).json({msg:err})

  }



}

const createTask = async(req, res, next) =>{
  try{
    const task = await databaseSchema.create(req.body)
    res.status(201).json({task:task})

  }catch(err){
    res.status(500).json({msg:err});

  }
  
}
const getSingleTask = async(req, res, next) =>{
  try{
    const {id:taskId} = req.params;
    const singleTask = await databaseSchema.findOne({_id:taskId});
    if(!singleTask){
      return res.status(500).json({msg:`sorry no user exists with this id ${taskId}`});
    }
    res.status(200).json({task:singleTask});


  }catch(err){
    res.status(500).json({msg:err});

  }
}
const updateTask = (req, res, next) =>{
  res.send("<h1>This is a single task</h1>");
}
const deleteTask = async(req, res, next) =>{
  try{
    const {id:taskId} = req.params;
    const task = await databaseSchema.findOneAndDelete({_id:taskId});
    if(task){
      return res.status(200).json({task});

    }
    return res.status(404).json({msg:`the task with Id ${{taskId}} does not exist`});

  }catch(err){
    res.status(500).json({msg:err});

  }
  
}
module.exports = {
  getAllTask,createTask,
  getSingleTask,updateTask,
  deleteTask,

}