import { Socket } from 'socket.io'
  /**
   * @description Represents a User
   * @constructor (socket, id , name?)
   */
export default class {
  socket: Socket
  name: string
  id: string
  constructor(socket: Socket, id:string, name?: string) {
    this.socket = socket
    this.id = id
    if(name !== undefined) { 
      this.name = name;
    }
  }

  /**
   * @description sets name for this user
   * @param name name to set
   */
  public setName(name: string) {
    this.name = name;
  }

  /**
   * @description sets socket for this user
   * @param socket socket to set
   */
  public setSocket(socket: Socket) {
    this.socket = socket;
  }
}