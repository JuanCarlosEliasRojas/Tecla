const modelUser = require('../model/modelUser')

module.exports.createU =async (user) =>{
    let usuario = new modelUser();
    let data =await usuario.createUser(user.usuario,user.nombre,user.primer_ap,user.segundo_ap,user.password,user.correo,user.num_cel);

}

module.exports.deleteU = async(usuario) =>{
    let response = new modelUser()
    let result = await response.deleteUser(usuario)
    return result;

}