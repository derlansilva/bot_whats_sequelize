
const { order } = require("./order")

//função que retorna o total de itens do pedido
function showOrder(){
    order.map(result => {
        console.log(`
            ${result.id} - ${result.description} -${result.price}
        `)
    })
    
}

exports.showOrder = showOrder;