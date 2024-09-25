require('dotenv').config()
const express =require('express')
const cors=require('express')
const dbconnect=require('./config/db')
const app=express()
app.use(express.json())
const Projects=require('./routes/projectRoute')
const Users=require('./routes/userRoute')
app.use(cors())
const port=process.env.PORT||5001

app.use('/projects',Projects)
app.use('/users',Users)

app.get("/",(req,res)=>{
    res.json({message:"Welcome"})
})

app.get("/hello",(req,res)=>{
    res.json({message:"Welcome Hello" })
})

app.listen(port,()=>{
    console.log(`Server running at ${port}`)
})
