const { order } = require("./order");

//função responsavel por adicionar os itens no array order
//e retornar somente a descrição para o cliente saber o produto adicionado na lista

function addMenu(data){
    
    order.push({description : data.description , price : data.price})
    

    console.log("pedido",order)
    return data.description;
    
}

exports.addMenu = addMenu