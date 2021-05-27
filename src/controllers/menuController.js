const { connect } = require("../database/connection");
const { menu } = require("../models/menu");

module.exports ={

    async add(data){

        let item = await menu.create({

            description : data.description,
            price: data.price
            
        })

        return item;

    },

    async getMenu(){
        
        let item = await menu.findAll()
        return item;

    },


    async menuId(id){

        let result = await menu.findByPk(id)

        if(!result){

            result = null
            return result;

        }else{
            return result
        }

    }
}
