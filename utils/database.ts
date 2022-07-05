import mongoose  from 'mongoose';
import * as logger from './logger';
import config from '@config';

const db = mongoose.connection;
const URI = generateURI();

db.on('connecting', () => {
	logger.info(`ATTEMPTING TO CONNECT TO DATABASE ${config.app.enviroment === 'local' ? URI : ''}`);
});

db.on('error', () => {
	logger.error('AN ERROR OCURRED WITH DB CONNECTION');
});

db.on('connected', () => {
	logger.success('DATABASE CONNECTED');
});

db.on('reconnected', () => {
	logger.warning('DATABASE RECONNECTED');
});

db.on('disconnected', () => {
	logger.warning('DATABASE HAS BEEN DISCONNECTED');
});

function generateURI(){
	const { database: db } = config;
	if(config.app.enviroment !== 'local'){
		return `mongodb+srv://${db.user}:${db.password}@${db.host}/${db.name}?retryWrites=true&w=majority`;
	} else {
		return `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`;
	}
}

export const init = () => {
	mongoose.connect(URI);
};