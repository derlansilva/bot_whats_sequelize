const { connect } = require("../database/connection")
const { user } = require("../models/user")

module.exports = {
    async insert(data){

        const exist = await user.findByPk(data.from.substring(0,12))//.from.substring(0,12))

        if(!exist){

            const username = await user.create({
                id: data.from.substring(0,12),
                number :data.from.substring(0,12),
                user : data.name,
                status: 0
            })
            
            return username

        }else{
            
            console.log("ja existe")
            return exist
    
        }
    },

    async updateStatus(id , status){
        const data =  await connect.query(`
            UPDATE users SET status = ${status} WHERE id = ${id}
        `)

        return data
    },

    async updateUserName(id , user){
        const client =  await connect.query(`
            UPDATE users SET user ="${user}" WHERE id = ${id.from.substring(0,12)}
        `)

        console.log('nome de usuario atualizado para ')

        return client;
    }
}
