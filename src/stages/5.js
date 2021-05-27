const { saveOrder } = require("../controllers/orderController")
const { updateStatus, updateUserName } = require("../controllers/userController")
const { order } = require("../utils/order")
const  { adress } = require('../utils/adress') 
const {payment} =  require('../utils/adress')
async function execute(user , msg){
    updateStatus(user.from.substring(0,12) , 6)
    updateUserName(user , msg)

    let orderAll = []
  
    let total = 0
  
    order.map(itens => {
 
        orderAll.push(itens.description)
        let amount = parseFloat(itens.price)
        
        total += amount

    })

    console.log('Pedido',order)
    console.log('endereço' , adress)
    console.log('pagamento' , payment)
    console.log('total' , total)
   

    saveOrder(orderAll , adress , total , payment , user.from.substring(0,12))

    return [`Seu pedido foi finalizado em breve lhe entregaremos muito obrigado pela preferencia
            `]
    
}

exports.execute = execute
