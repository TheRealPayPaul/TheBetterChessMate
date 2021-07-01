import { Socket } from 'socket.io'
import cookie from './CookieParser'
export default class {
	public main(socket: Socket) {
		// Cookie Class testing stuff
		console.log(socket.handshake.headers.cookie)
		console.log(cookie.parse(socket.handshake.headers.cookie))
		console.log(cookie.stringify(cookie.parse(socket.handshake.headers.cookie)))
	}
}