import axios from 'axios';

import { Request, Response } from 'express';

const login = (req: Request, res: Response) => {
	return res.json({
		msg: 'login', a: 2, b: '2', c: '23s'
	});
};


export { login };