const express=require('express')

require('dotenv').config()

require('./db/dbconnection')

const cors=require('cors')

const route= require('./routes/routing')

const server=express()

server.use(cors())

server.use(express.json())

const port=3000 || process.env.port

server.use(route)

server.listen(port,()=>{
    console.log(`___server started running at port number ${port}`);
})


