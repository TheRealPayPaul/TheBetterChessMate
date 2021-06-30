import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const port = 1234

// Point to the client dist folder
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')))

io.on('connection', (socket) => {
  console.log('a user coneccted')
})

server.listen(port, () => {
  console.log('App listening to port: ' + port)
})