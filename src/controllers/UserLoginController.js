import User from '../models/user.js'
import bcrypt from 'bcrypt'
import createUserToken from '../middlewares/CreateUserToken.js'

//Função que realiza o login do usuário
const loginUser = async (req, res)=>{

    const {email, password} = req.body

    if(!email){
        res.status(422).json({message: 'O email é obrigatório!'})
        return 
    }

    if(!password){
        res.status(422).json({message: 'A senha é obrigatório!'})
        return
    }
    
    //verificando se usário existe através da comparação de e-mail
    const user = await User.findOne({email})//encontre um e-mail no banco

    //se e-mail não existir retorne mensagem de erro
    if(!user){
        res.status(422).json({
            message: 'Usuário não encontrado! Por favor verifique se suas informações de login estão corretas!'
        })
        return
    }

    //verificando se a senha que o usuário digitou é igual a senha cadastrada no banco
    const checkedPassword = await bcrypt.compare(password, user.password)
    
    //se a senha não for igual retorne mensagem de erro
    if(!checkedPassword){
        res.status(422).json({message: 'Usuário não encontrado! Por favor verifique se suas informações de login estão corretas!'})
    }

    await createUserToken(user, req, res)

}

export { loginUser }