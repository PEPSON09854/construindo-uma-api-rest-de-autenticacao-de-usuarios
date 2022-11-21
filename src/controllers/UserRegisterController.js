import User from '../models/user.js'
import bcrypt from 'bcrypt'
import createUserToken from '../middlewares/CreateUserToken.js'

//função que cadastra o usuário
const registerUser = async (req, res) =>{

    const { name, email, password, confirmPassword } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(422).json({message: 'Usuário já existe!'})
        return
    }

    if(!name){
        res.status(422).json({message: 'O nome é obrigatório!'})
        return
    }
    if(!email){
        res.status(422).json({message: 'O email é obrigatório!'})
        return
    }
    if(!password){
        res.status(422).json({message: 'A senha é obrigatório!'})
        return
    }
    if(!confirmPassword){
        res.status(422).json({message: 'Confirmar senha é obrigatório!'})
        return
    }
    if(password !== confirmPassword){
        res.status(422).json({message: 'As senhas precisam ser iguais!'})
        return
    }

    //criando senha criptografada
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    //criando usuário
    const user = new User({
        name,
        email,
        password: passwordHash,
        confirmPassword,
    })

    try {
        const newUser = await user.save()//salvando usuário no banco
        await createUserToken(newUser, req, res)
    } catch (error) {
        res.status(500).json({error: 'Houve um erro, tente mais tarde!'})
        
    }
}


export {registerUser}