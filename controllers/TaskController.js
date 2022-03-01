const Task = require('../models/Task')

class TaskController {
  static createTask(req, res) {
    res.render('add')
  }
  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      description: req.body.description,
      done: false,
    }

    await Task.create(task)
    res.redirect('/')
  }

  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true })
    res.render('all', { tasks })
  }

  static async updateTaskPost(req, res) {
    const id = req.body.id
    const task = {
      title: req.body.title,
      description: req.body.description,
    }
    await Task.update(task, { where: { id: id } })
    res.redirect('/')
  }

  static async updateTask(req, res) {
    const id = req.params.id
    const task = await Task.findOne({ raw: true, where: { id: id } })
    console.log(task)
    res.render('edit', { task })
  }

  static async toggleTaskStatus(req, res) {
    const id = req.body.id
    const task = {
      done: req.body.done === '0' ? true : false,
    }

    await Task.update(task, { where: { id: id } })
    res.redirect('/')
  }

  static async removeTask(req, res) {
    const id = req.body.id
    await Task.destroy({ where: { id: id } })
    res.redirect('/')
  }
}

module.exports = TaskController
