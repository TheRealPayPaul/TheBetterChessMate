import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import path from 'path'
import connectionHandler from './SocketConnectionHandler'
const conHandler = new connectionHandler();
const app = express()
const server = http.createServer(app)
const io = new Server(server)
const port = 1234

// Point to the client dist folder
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')))

io.on('connection', conHandler.main)

server.listen(port, () => {
  console.log('App listening to port: ' + port)
})