import http from 'http';
import api from './api/api';
import { logger } from '@utils';
import config from '@config';

const port = config.server.port;
const server = http.createServer(api);


server.on('listening', () => {
	logger.success(`SERVER RUNNING ON ${port}`);
	logger.success(`http://localhost:${port}/public`);
});

server.on('error', (err) => {
	logger.error('ERROR ON SERVER');
	console.error(err);
});

server.listen(port);