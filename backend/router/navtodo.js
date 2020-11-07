const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const db = require('../config/db')
const navTodoMangoos = mongoose.model('navTodo');

const success = (res, payload) => {
    return res.status(200).json(payload)
}

router.get('/', async (req, res, next) => {

     try {
        const todos = await navTodoMangoos.find({})        
        return success(res, todos)
      } catch (err) {
        next({ status: 400, message: "failed to get todos" })
      }
})
router.post('/todos', async (req, res, next) => {
    
     await navTodoMangoos.create({ task: req.body.task, completed: req.body.completed }, function (err, awesome_instance) {
      if (err) return console.log(`there is an error ${err}`);
       return success(res, awesome_instance);
    });
})
router.put("/todos/:id", async (req, res, next) => {
  try {
    const todo = await navTodoMangoos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    return success(res, todo)
  } catch (err) {
    next({ status: 400, message: "failed to update todo" })
  }
  req.end
})
router.delete("/todos/:id", async (req, res, next) => {
  try {
    await navTodoMangoos.findByIdAndRemove(req.params.id)
    return success(res, "todo deleted!")
  } catch (err) {
    next({ status: 400, message: "failed to delete todo" })
  }
})

module.exports = router;