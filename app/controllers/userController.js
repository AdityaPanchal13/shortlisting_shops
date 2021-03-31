const User=require('../models/user')

const userController={}

userController.register=(req,res)=>{
    const body=req.body
    const user=new User(body)
    user.save()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

userController.list=(req,res)=>{
    User.find()

    .then((result)=>{
        const allUsers=[]
        result.map(user=>{
            const obj={
                name:user.name,
                email:user.email,
                phoneNumber:user.phone,
                birthday:user.birthday,
                store:user.store 
            }
        
            allUsers.push(obj)
            console.log(allUsers)
            
        })
        res.send(allUsers)
    })
    .catch((err)=>{
        res.send(err)
    })
}


module.exports=userController

