const { updateStatus } = require("../controllers/userController")
const { adress } = require("../utils/adress")
const { order } = require("../utils/order")


async function execute(user , msg , item , client){
    if(msg === 'ok' || msg === 'Ok' || msg === 'OK'){
        
        /*passar para uma função que salva no banco o pedido
        com os parametros (id do usuario , itens , endereco de entrega  , valor total ,
        forma de pagamento)*/

        updateStatus(user.from.substring(0,12) , 4)

        return ['Qual a forma de pagamento , dinheiro ou cartão  ?']
    }

    if(msg === '0'){
        updateStatus(user.from.substring(0,12) , 0)
        return ['Pedido cancelado']
    }
    
    adress.push( msg)
    return [`confirma o endereço de entrega: \n\n${msg}\n\npara confirmar digite ok para corrigir digite o endereço novamente ou 0 para cancelar
    `]
}

exports.execute = execute;
