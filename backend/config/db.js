const mongoose = require("mongoose")
mongoose.connect("mongodb://mongo:27017/nav-todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (error) => {
  if(error){
    console.log('mongo db connection fails');
  } else {
      console.log(' monogo db connection works');
  }
})

mongoose.set('useCreateIndex', true);
mongoose.set("debug", true) 
mongoose.Promise = Promise

const navTodo = require('../models/');