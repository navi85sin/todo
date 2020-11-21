import axios from "axios"

const API_URL = "http://localhost:5000/navtodo/"

const createTodo = async (task) => {
  const { data: newTodo } = await axios.post(`${API_URL}todos/`, {
    task,
  })
 
  return newTodo
}

const deleteTodo = async (id) => {
  const message = await axios.delete(`${API_URL}todos/${id}`)
  return message
}

const updateTodo = async (id, payload) => {
  const { data: newTodo } = await axios.put(`${API_URL}todos/${id}`, payload)
  return newTodo
}

const getAllTodos = async () => {
  const { data: todos } = await axios.get(API_URL)
  return todos
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos }