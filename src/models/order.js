const  sequelize  = require('sequelize')
const { connect } = require('../database/connection');
const { user } = require('./user');

const order = connect.define('order' , {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey : true
    },

    items:{
        //itens do pedido 
        type: sequelize.STRING,
        allowNull : false
    },
    adress : {
        //endereç
        type: sequelize.STRING,
        allowNull: false
    },
    total : {
        type: sequelize.STRING,
        allowNull: false
    },
    payment:{
        //forma de pagamento , dinheiro ou cartão
        type: sequelize.STRING,
        allowNull: false
    }
});

user.hasMany(order)
order.belongsTo(user)

order.sync({force: false}).then(()=>{})

exports.order = order