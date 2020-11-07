const express = require("express") 
const bodyParser = require("body-parser")
//const db = require('../backend/config/db')
const router = require('./router/navtodo')
const cors = require("cors")

const app = express()  
const PORT = process.env.PORT || 4000  

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))  
app.use(bodyParser.json())
// Router
app.use('/navtodo', router);

 
app.listen(PORT, () => {
  // listening on port 4000
  console.log(`listening on port ${PORT}`) 
})
