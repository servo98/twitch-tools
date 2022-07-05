import dotenv from 'dotenv';

const enviroment = process.env.NODE_ENVIROMENT || 'local';

const result = dotenv.config({
	debug: Boolean(process.env.DEBUG),
	path: `.env.${enviroment}`
});

if(result.error){
	throw new Error('DOTENV error');
}


export default {
	app: {
		name: process.env.APP_NAME,
		enviroment: process.env.NODE_ENV
	},
	server: {
		port: Number(process.env.PORT) || 3001
	},
	database: {
		port: process.env.DB_PORT || 27017,
		host: process.env.DB_HOST || 'localhost',
		name: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
		user: process.env.DB_USER
	},
	socket: {
		port: Number(process.env.SOCKET_PORT) || 3002,
		secret: process.env.SOCKET_SECRET
	}
};