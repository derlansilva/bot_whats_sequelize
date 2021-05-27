const sequelize = require('sequelize')

const connect = new sequelize('bot' , 'root' , '03394579' , {
    host: 'localhost',
    dialect: 'mysql'
})

exports.connect = connect