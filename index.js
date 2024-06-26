
const express = require('express');
const app = express();
const router = require('./routers/taskRouter');
app.use(express.json());
require('dotenv').config();
const connectDb = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleWare = require('./middleware/error-handler');


const port = 3000;


app.use('/todo-app/v1', router);
app.use(notFound);
app.use(errorHandlerMiddleWare);

const startServer = async() =>{
  try{
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log("server connected successfully"));


  }catch(err){
    console.log(err);
  }
  
}

startServer();