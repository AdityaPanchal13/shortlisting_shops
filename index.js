const express=require('express')
const cors = require("cors")
const app=express()

const configureDB=require('./config/database')
configureDB()

const routes=require('./config/router')
const port=4000

app.use(cors())
app.use(express.json())
app.use('/',routes)


app.listen(port,()=>{
    console.log('listening on port',port)
})