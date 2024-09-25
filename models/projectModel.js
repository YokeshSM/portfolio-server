const mongoose=require('mongoose')

const projectSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:false,
    },
    coverimg:{
        type:String,
        required:false,
    }
})

const Projects=mongoose.model("Projects",projectSchema)
module.exports=Projects