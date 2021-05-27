const { updateStatus } = require("../controllers/userController");
const { order } = require("../utils/order");


function execute(user , msg){
    if(msg === 0){
        updateStatus(user.from.substring(0,12) , 0)
        return ['Pedido cancelado']
    }

    if(msg === 'ok' || msg === 'Ok' ||msg === 'OK' ){
        updateStatus(user.from.substring(0,12) , 3)
        return ['Digite o endereço por favor ,ex:rua , numero , bairro']
    }

    let resumo = "*RESUMO*\n"
    total = 0
    order.map(item => {
        
        resumo += `${item.description} - ${item.price}\n`
        let amount = parseFloat(item.price.replace(',', '.'))
        total += amount
    })

    resumo += '________________________\n'
    resumo += `TOTAL  = R$: ${total}`
    return [resumo , "Para confirmar digite ok , ou cancelar digite 0"]
    
}

exports.execute = execute;
