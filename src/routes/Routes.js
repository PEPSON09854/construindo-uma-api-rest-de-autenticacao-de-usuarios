import express from 'express'
import UserRoutes from './UserRoutes.js'

const router = express.Router()

router.use('/api/users', UserRoutes)

router.get('/', (req, res)=>{
    res.status(200).json('API FUNCIONANDO!')
})



export default router