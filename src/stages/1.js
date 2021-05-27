const { menuId } = require("../controllers/menuController");
const { updateStatus } = require("../controllers/userController");
const { addMenu } = require("../utils/addMenu");
const { renderMenu } = require("../utils/renderMenu");


async function execute(user , msg){
    if(msg === 0){
        updateStatus(user.from.substring(0,12) , 0)
        return ["pedido cancelado com sucesso"]
    }

    if(msg === 'seguir' || msg === 'Seguir' || msg === 'SEGUIR'){
        updateStatus(user.from.substring(0,12) , 2)

        return ["estamos finalizando seu pedido , digite seguir"]
    }

    let data = await menuId(msg)
    //console.log(data.description)
    if(!data){
        return [`Item não encontrado, escolha um dos itens do cardapio
                ${await renderMenu()}
                ou 0 para cancelar
        `]
    }else{

        await addMenu(data)
        
        return [`Item *${data.description}* adicionado se deseja adicionar mais algum  item digite o codigo se deseja finalizar digite *seguir* se deseja cancelar digite *0*
        `]
    }
}

exports.execute = execute;