const sequelize = require("sequelize")

module.exports = class Users{
    constructor(user){
        this.user=user
    }

    async createUser(nombre,apellido_uno,apellido_dos,usuario,password,correo,num_celular){
        let result = await sequelize.query("INSERT INTO users(nombre,apellido_uno,apellido_dos,usuario,password,correo,num_celular)VALUES('"+
        nombre + "','"+apellido_uno+"','"+apellido_dos+"','"+usuario+"','"+password+"','"+correo+"','"+num_celular+"') ");
        return result
    }
    async deleteUser(usuario){
        let result = await sequelize.query("DELETE FROM users WHERE usuario =  '"+usuario+"'");
    }
}