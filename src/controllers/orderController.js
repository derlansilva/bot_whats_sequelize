const { order } = require("../models/order")


module.exports ={
    async saveOrder(all , adress , total , payment , userId){

        const pedido = await order.create({
            items: all,
            adress: adress,
            total: total,
            payment: payment,
            userId: userId,
        })
        return pedido
        
    }
}