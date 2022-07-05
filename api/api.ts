import { CustomError } from '@utils';
import express, { Response, Request, NextFunction } from 'express';
import * as routes from '@routes';

const api = express();



api.get('/status', (_, res: Response) => {
	return res.json({
		message: 'API Active'
	});
});

api.use('/public', express.static(__dirname + '../../public'));

Object.values(routes).forEach(route => api.use(route));

api.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if(err instanceof CustomError){
		return res.json({
			erro: 'custom error'
		});
	}
	return res.json({
		msg: 'Unhandled error'
	});
});

export default api;
