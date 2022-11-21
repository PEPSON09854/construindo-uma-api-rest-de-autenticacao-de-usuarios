import jwt from 'jsonwebtoken'
import { getToken } from './GetToken.js'

const checkToken = async (req, res, next)=>{

    
    if(!req.headers.authorization){
        res.status(401).json({message: 'Acesso negado!'})
        return
    }
    
    const token = getToken(req)

    if(!token){
        res.status(401).json({message: 'Acesso negado!'})
        return
    }

    try {
        const verified = jwt.verify(token, 'secret')
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({message: 'Token inválido!'})
    }

}


export  {checkToken}