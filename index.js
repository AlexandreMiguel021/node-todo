const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())
app.use(express.static('public'))

app.use('/', tasksRoutes)

conn
  .sync()
  .then(() => app.listen(3000))
  .catch(error => console.log(error))
