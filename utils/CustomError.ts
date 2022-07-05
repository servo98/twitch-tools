export default class extends Error {
	message: string;
	code: number;
	httpCode: number;

	constructor(message: string, httpCode?: number, code?: number, ){
		super(message);
		this.message = message;
		this.httpCode = httpCode || 500;
		this.code = code || 1;
	}
}