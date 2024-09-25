const mongoose=require("mongoose")
mongoose.connect(process.env.URL||"mongodb+srv://yoks123:yoks123@mycluster-123.n7fbu.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster-123")

const connection=mongoose.connection;
connection.on("connected",()=>console.log("DB Connected"))
connection.on("error",()=>console.log("DB Error"))

module.exports=mongoose;