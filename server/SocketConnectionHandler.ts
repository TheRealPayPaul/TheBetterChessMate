import { Socket } from 'socket.io'
import cookie from 'cookie'
export default class {
	public main(socket: Socket) {
		if (socket.handshake.headers.cookie) {
			console.log(cookie.parse(socket.handshake.headers.cookie))
		}
	}
}