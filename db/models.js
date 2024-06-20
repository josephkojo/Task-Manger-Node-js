const mongoose = require('mongoose');

const schemaTable = new mongoose.Schema(
  {
    name:{
      type:String,
      required:[true, 'must provide real name to the task'],
      trim:true,
      maxlength:[200, 'the character should be of lenght 20']

    }, 
    completed:{
      type:Boolean,
      default:false
    }
  }
);
module.exports = mongoose.model('Task', schemaTable);