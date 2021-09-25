const userController = require('../controller/controlUser')
module.exports = async (app) =>{
    app.post('/user',async(req,res) =>{
        let usuario = req.body;
        res.send(await userController.createU(usuario));
    });

    app.delete('/user/:usuario',async(req,res)=>{
        let usuario =req.params.usuario
        res.send(await userController.deleteU(usuario));
    });

    app.get('/user',async(req,res)=>{
        res.send(await userController.readU());
    });

    app.patch('/updateuser',async(req,res)=>{
        let usuario =req.body;
        res.send(await userController.updateU(usuario));
    })
}