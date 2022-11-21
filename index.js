import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import path from 'path'
import db from './src/config/db.js'
import router from './src/routes/Routes.js'

dotenv.config()

const app = express()
const __dirname = path.resolve()
const port = process.env.PORT

app.use(express.json())

app.use(cors({
    credentials: true, 
    origin: 'http://localhost:3000'
}))

app.use('/public', express.static(path.join(__dirname + '/public')))

app.use(router)

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

