const { updateStatus } = require("../controllers/userController")
const { order } = require("../utils/order")
const { payment } = require("../utils/payment")




async function execute(user , msg){
    /*enviar o  nome para a tabela user e atualizar o nome do usuario pelo nome que foi 
    passado no msg*/
    
    if(msg == 'dinheiro' || msg == 'Dinheiro' || msg == 'cartão' || msg === 'Cartão'|| msg === 'CARTÃO'){
        updateStatus(user.from.substring(0,12) , 5)
        payment.push( msg)
        return [`Para finalizar digite seu nome:`]
    }else{
        return [`Forma de pagamento incorreta , temos a opção dinheiro ou cartão , digite corretamento`]
    }
    
}

exports.execute = execute;