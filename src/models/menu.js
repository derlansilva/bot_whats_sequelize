const sequelize = require('sequelize')
const { connect } = require("../database/connection");


const menu = connect.define('menu',{
    description: {
        type: sequelize.STRING
    },
    price : {
        type: sequelize.STRING
    }
});


menu.sync({force : false}).then(() => {})

exports.menu = menu