const express = require('express')
const TaskController = require('../controllers/TaskController')
const router = express.Router()

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskPost)
router.get('/', TaskController.showTasks)
router.post('/updatestatus', TaskController.toggleTaskStatus)

module.exports = router
