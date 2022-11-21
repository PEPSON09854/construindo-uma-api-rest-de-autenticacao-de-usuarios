import jwt from 'jsonwebtoken'
import User from '../models/user.js'

//função de middleware que busca usuário pelo token
const getUserByToken = async (token) =>{

    if(!token){
        res.status(401).json({message: 'Acesso negado!'})
        return
    }

    const decoded = jwt.verify(token, 'secret')

    const userId = decoded.id

    const user = await User.findOne({_id: userId})

    return user

}

export {getUserByToken}