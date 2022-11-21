import jwt from 'jsonwebtoken'

const createUserToken = async (user, req, res)=>{

    //criando token de usuário
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, 'secret')

    //retornando token
    res.status(200).json({
        message: 'Você está autenticado!',
        token: token,
    })

}

export default createUserToken