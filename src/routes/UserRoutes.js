import express from 'express'
import { registerUser } from '../controllers/UserRegisterController.js'
import { loginUser } from '../controllers/UserLoginController.js'
import { checkUser } from '../controllers/UserCheckController.js'
import { getUserById } from '../controllers/UserGetByIdController.js'
import { editUser } from '../controllers/UserEditController.js'
import { checkToken } from '../middlewares/VerifyToken.js'


const UserRoutes = express.Router()

UserRoutes.post('/register', registerUser)
UserRoutes.post('/login', loginUser)
UserRoutes.get('/check', checkUser)
UserRoutes.get('/:id', getUserById)
UserRoutes.patch('/edit/:id', checkToken, editUser)


export default UserRoutes