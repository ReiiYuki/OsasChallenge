import express from 'express'
import socket from 'socket.io'
import mongoose from 'mongoose'

let app = express()

let server = app.listen(3000,()=>{
  console.log('Server listening to PORT=3000')
})

let MONGOURI = 'SOMETHING'

mongoose.connect(USTORY_DB_URI,()=>{
  console.log('Connect to MongoDB at "'+MONGO_URI+'" Successful')
})

let io = socket.listen(server)

io.on('connection',(socket)=>{
  //socket.on('path',(msg)={})
})
