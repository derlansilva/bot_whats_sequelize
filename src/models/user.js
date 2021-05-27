const sequelize = require('sequelize')
const { connect } = require('../database/connection')

const user = connect.define('user' , {
    id : {
        type : sequelize.BIGINT,
        primaryKey : true,
    },
    number:{
        type: sequelize.STRING,
    } ,
    user : {
        type : sequelize.STRING,
    },
    status : {
        type : sequelize.INTEGER
    }

}) 

user.sync({force : false}).then(() => {})

exports.user = user