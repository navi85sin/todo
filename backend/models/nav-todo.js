const mongoose = require("mongoose");

const navtodoSchema = new mongoose.Schema({
  task: {
    type: String,  
    unique: true, 
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

const navTodo = mongoose.model("navTodo", navtodoSchema);

module.exports = navTodo