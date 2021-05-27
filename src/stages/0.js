const { getMenu } = require("../controllers/menuController");
const { updateStatus } = require("../controllers/userController");
const { renderMenu } = require("../utils/renderMenu");


 
 async function execute (user , msg , data){
      let message = await renderMenu()
      
      updateStatus(user.from.substring(0,12) , 1)
 
      return [`Olá sou um assistente  virtual.\nDigite o codigo para fazer o pedido`,message]
 }
 
 exports.execute = execute
 


