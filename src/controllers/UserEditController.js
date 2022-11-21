import bcrypt from 'bcrypt'
import User from "../models/user.js";
import { getToken } from "../middlewares/GetToken.js";
import { getUserByToken } from "../middlewares/GetUserByToken.js";

//função que atualiza dados do usuário no banco
const editUser = async (req, res)=>{

    const userExist = await User.findOne({email})
    
    const token = getToken(req)

    const user = await getUserByToken(token)
   
    const {name, email, password, confirmPassword} = req.body


    if(user.email !== email && userExist){
        return res.status(422).json({message: 'Usuário já existe!'})
        
    }

    if(!name){
        res.status(422).json({message: 'O nome é obrigatório!'})
        return
    }
    user.name = name

    if(!email){
        res.status(422).json({message: 'O email é obrigatório!'})
        return
    }
    user.email = email

    
    if(password !== confirmPassword){
        res.status(422).json({message: 'As senhas precisam ser iguais!'})
        return
    }else if(password === confirmPassword && password !== null){
        //criando senha criptografada
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt) 

        user.password = passwordHash
    }

    try {
        // retornando data de atualização usuário
        await User.findOneAndUpdate(
            {_id: user_id},
            {$set: user},
            {new: true}
        )

        return res.status(200).json({message: 'Usuário atualizado com sucesso!'})
    } catch (error) {
        return res.status(500).json({message: error})
    }

}

export {editUser}