const express=require('express')
const router=express.Router()

const userController=require('../app/controllers/userController')

router.post('/register',userController.register)
router.get('/dashboard',userController.list)
module.exports=router