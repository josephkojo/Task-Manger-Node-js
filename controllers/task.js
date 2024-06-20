const databaseSchema = require('../db/models')



const getAllTask = (req, res, next) =>{
  res.send("This include all the task needed for the daily routine");



}

const createTask = async(req, res, next) =>{
  const task = await databaseSchema.create(req.body)
  res.status(201).json({task:task})
}
const getSingleTask = (req, res, next) =>{
  res.send("<h1>This is a single task</h1>");
}
const updateTask = (req, res, next) =>{
  res.send("<h1>This is a single task</h1>");
}
const deleteTask = (req, res, next) =>{
  res.send("Delete task");
}
module.exports = {
  getAllTask,createTask,
  getSingleTask,updateTask,
  deleteTask,

}