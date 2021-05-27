const { order } = require("../utils/order")

function execute(user , msg){
    /*verificar se o cliente esta no estagio 5 
    perguntar se ele deseja cancelar o pedido
    auterar o endereço 
    auterar itens 
    auterar forma de pagamento*/

    if(msg ==='mais'){
        return ['adionar mais itens']
    }
    if(msg === '0'){
        return ['pedido cancelado']
    }
    if(msg === 'pagamento'){
        return ['digite a forma de pagamento']
    }
    if(msg === 'detalhes'){
        let resumo = "*RESUMO*\n"
        total = 0
        order.map(item => {
            resumo += `${item.description} - ${item.price}\n`
            let amount = parseFloat(item.price.replace(',', '.'))
            total += amount
        })

        resumo += '________________________\n'
        resumo += `TOTAL  = R$: ${total}`
        return [resumo , "Para confirmar digite ok , ou cancelar pedido digite 0"]
    }

    return [`Seu pedido foi finalizado deseja adicionar algum item digite *mais*, cancelar digite *0* , mudar forma de pagamento digite *pagamento* , ou detalhes do seu pedido *detalhes*
            `]

}


exports.execute = execute;