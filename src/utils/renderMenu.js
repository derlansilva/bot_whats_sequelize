const { getMenu } = require("../controllers/menuController");

//função responsavel por renderizar os itens do menu 
async function renderMenu(msg){
    
    let message = "CARDAPIO \n\ncondigo|descrição|preço\n\n"; 
    let data =await getMenu()
    data.map(value => {
        message += `${value.id} - ${value.description} - R$: ${value.price}\n`
        
    })
    
    return message;
}

exports.renderMenu = renderMenu;