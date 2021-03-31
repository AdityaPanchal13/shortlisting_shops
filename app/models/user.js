const mongoose=require('mongoose')
const isEmail=require('validator/lib/isEmail')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        minlength:6,
        maxlength:64,

    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator:function(value){
                return isEmail(value)
            },
            message:function(){
                return 'invalid email format'
            }
        }
    },

    phone:{
        type:Number,
        required:true
    },
    birthday: {
        type: Date,
        
    },
    store:{
        type:String

    }

})
const User=mongoose.model('User',userSchema)
module.exports=User