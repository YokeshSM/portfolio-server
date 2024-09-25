const mongoose=require('mongoose')
const Userschema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true
    }
})

const User = mongoose.model("User", Userschema)
module.exports = User;