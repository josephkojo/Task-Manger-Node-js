const databaseSchema = require('../db/models');
const asyncWrapper = require('../middleware/asyncWrapper');





const getAllTask = asyncWrapper( async(req, res) =>{
  const task = await databaseSchema.find({})
  res.status(200).json({task});
});


const createTask = asyncWrapper(async(req, res) => {
  const task = await databaseSchema.create(req.body);
  res.status(201).json({task:task});

});

const getSingleTask  = asyncWrapper(async(req, res) => {
  const {id:taskId} = req.params;
  const singleTask = await databaseSchema.findOne({_id:taskId});
  if(!singleTask){
    return res.status(500).json({msg:`sorry no user exists with this id ${taskId}`});
  }
  res.status(200).json({task:singleTask});
})

const updateTask = asyncWrapper( async(req, res, next) =>{
  

    const {id:taskId} = req.params;
    const singleTask = await databaseSchema.findOneAndUpdate({_id:taskId}, req.body, {
    new:true, runValidators: true

  });
  if(!singleTask){
    return res.status(404).json({msg:`could not find task with id ${taskId}`});
  }
  res.status(200).json({singleTask: singleTask})

  

  
})
const deleteTask = asyncWrapper( async(req, res, next) =>{
  
    const {id:taskId} = req.params;
    const task = await databaseSchema.findOneAndDelete({_id:taskId});
    if(task){
      return res.status(200).json({task});

    }
    return res.status(404).json({msg:`the task with Id ${{taskId}} does not exist`});

  
  
})
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,

}