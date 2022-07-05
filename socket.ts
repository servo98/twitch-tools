import { Server } from 'socket.io';
import config from '@config';

const io = new Server(config.socket.port, {
});


io.use((socket, next) => {
	const token = socket.handshake.auth.token;
	if(token){
		next();
	} else {
		throw new Error('Auth token missing in token handshake');
		
	}
});

io.on('connection', (socket) => {
	// ...
});

io.listen(3000);

export default io;