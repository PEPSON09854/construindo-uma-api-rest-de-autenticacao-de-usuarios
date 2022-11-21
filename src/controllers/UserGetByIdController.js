import User from "../models/user.js"

const getUserById = async (req, res) =>{

    const id = req.params.id

    //encontrando usuário e retornando dados pelo id menos a senha
    const user = await User.findById(id).select("-password")

    if(!user){
        res.status(422).json({message: 'Usuário não encontrado!'})
        return
    }

    res.status(200).json({user})

}

export {getUserById}