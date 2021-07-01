import { userListFormat } from './types'
import cookie from 'cookie'
import UserObject from './UserObject'
import { v4 as uuidv4 } from 'uuid'
  /**
   * @description Represents a list of Users
   * @constructor default initializer
   */
class UserList {
  private static instance: UserList; // instance for Singleton
  private userlist: userListFormat // needed to keep track of users

  private constructor(){}

  /**
   * @description Generates an available UUID
   * @returns newID
   */
  private generateUUID(): string {
    let id = uuidv4();
    return (this.userlist[id]) ? this.generateUUID() : id;
  }

  /**
   * @description adds a User to the userList
   * @param user Given UserObject to add to userList
   */
  public addUser(user: UserObject) {
    let usercookies = cookie.parse(user.socket.handshake.headers.cookie)
    if (usercookies.chessid && this.userlist[usercookies.chessid]) {
      this.userlist[usercookies.chessid].setSocket(user.socket);
      //TODO Remove self-delte timer when player joined Back in the game (setTimeout)
      return
    }
    let new_uuid = this.generateUUID()
    this.userlist[new_uuid] = user
    //TODO write id in cookie
  }

  /**
   * @description Returns instance of this class
   * @returns instance
   */
  public static getInstance(): UserList {
    if (!UserList.instance) { UserList.instance = new UserList(); }
    return UserList.instance;
  }
}
export default UserList