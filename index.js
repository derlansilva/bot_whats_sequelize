const { add, getMenu, menuId } = require('./src/controllers/menuController')
const { addMenu } = require('./src/utils/addMenu')
const { renderMenu } = require('./src/utils/renderMenu')
const { showOrder } = require('./src/utils/showOrder')

const { stages } = require('./src/utils/stages')
const { insert, updateStatus, updateUserName,  } = require('./src/controllers/userController')



//chamado o venon
const venom = require('venom-bot')

//aqui estou iniciando e chamento pela promisse a função start
venom.create().then(client => start(client))


//função responsavel por receber msg e enviar uma resposta ao cliente
async function start(client){
    client.onMessage(async message => {
        if(message.body){
            let data = await insert(message)
            console.log("função assinc")
         
            renderMessage(client  , data , message , message.body)
        }
    })
}
 
//função que renderiza as mensagens que serão enviados para o cliente
async function renderMessage(client , data , message , body){
    //variavel resp e =  stages na posição passada , vai pegar o obj e a função execute
    console.log("função de renderizar")
    let resp = await stages[data.status].obj.execute(message , body  , data , client )
    console.log('resposta' , resp)
    for(let index = 0 ; index < resp.length ; index ++){
        const element = resp[index];
        client.sendText(message.from , element)
    }
}

