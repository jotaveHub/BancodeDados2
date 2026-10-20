import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Conectado no MongoDB'))
    .catch(err => console.log(err));

    const UsuarioSchema = mongoose.Schema({
        nome: String,
        email: {
            type:String,
            required:true,
            unique:true
        }
    })

    const Usuario = mongoose.model('Usuario', UsuarioSchema)

    //Inserir
    Usuario.insertOne({
    nome: "Paulo",
    email: "paulo@gmail.com"})
    .then(()=> console.log('Salvo com sucesso'))
    .catch(err => console.log(err))
    
    
    //atualizar
    /*const paulo = await Usuario.findOne({
        email: "paulo@gmail.com"
    })
    paulo.nome = "Paulo da Silva"
    paulo.save()
    .then(()=> console.log('Atualizado com sucesso'))
    .catch(err => console.log(err))*/
    

    //deletar
    /*
    await Usuario.deleteOne({
        email: "paulo@gmail.com"
        })
        .then(()=> console.log('Deletado com sucesso'))
        .catch(err => console.log(err))*/