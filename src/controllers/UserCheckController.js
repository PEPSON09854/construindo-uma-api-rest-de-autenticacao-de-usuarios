import  jwt  from "jsonwebtoken"
import User from "../models/user.js"
import { getToken } from "../middlewares/GetToken.js"

//função que verifica se token retornado é o mesmo do usuário
const checkUser = async (req, res) =>{

    let currentUser

    if(req.headers.authorization){

        const token = getToken(req)

        const decoded = jwt.verify(token, 'secret')

        currentUser = await User.findById(decoded.id)

        currentUser.password = undefined

    }else{
        currentUser = null
    }

    res.status(200).send(currentUser)
}

export {checkUser}