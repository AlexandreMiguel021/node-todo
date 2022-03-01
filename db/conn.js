const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('🚀 Connected to MySQL!')
} catch (error) {
  console.log(error)
}

module.exports = sequelize
