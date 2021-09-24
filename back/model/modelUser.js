const sequelize = require("../db/conexion")

module.exports = class Users{
    constructor(user){
        this.user=user;
    }

    async createUser(usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel){
        let result = await sequelize.query("INSERT INTO  users (usuario,nombre,primer_ap,segundo_ap,password,correo,num_cel)VALUES('"+usuario+"','"+nombre+"','"+primer_ap+"','"+segundo_ap+"','"+password+"','"+correo+"','" +num_cel+"')");
        return result
        
    }
    async deleteUser(usuario){
        let result = await sequelize.query("DELETE FROM users WHERE usuario =  '"+usuario+"'");
    }
}