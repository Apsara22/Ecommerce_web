import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
dotenv.config()
import connectDB from './config/connect'


const app = express()

app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL
}))

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({
    crossOriginResourcePolicy:false
}))

const PORT = 8000 || process.env.PORT
app.get("/", (req,res)=>{
    res.json({
        message: "SErver is running"
    })
})
connectDB().then(() =>{
    app.listen(PORT, ()=>{
        console.log("Server is running", PORT)
    })

})


