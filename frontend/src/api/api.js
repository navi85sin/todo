import axios from "axios"

const API_URL = "http://localhost:4000/navtodo/"

async function createTodo(task) {
  const { data: newTodo } = await axios.post(`${API_URL}todos/`, {
    task,
  })
 
  return newTodo
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}todos/${id}`)
  return message
}

async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URL}todos/${id}`, payload)
  return newTodo
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL)
  return todos
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos }