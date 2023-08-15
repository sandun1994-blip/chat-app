
import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import AuthRoutes from './routes/AuthRoutes.js'

dotenv.config()
const app =express()



app.use(cors())
app.use(express.json())
// app.get('/',(req,res)=>{
//     return res.json({h:'ss'})
// })
app.use('/api/auth',AuthRoutes)

const server =app.listen(3005,()=>{
    console.log('app listen from port 3005;');
}) 