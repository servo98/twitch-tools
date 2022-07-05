import colors from 'colors';

export const success = (msg:string) => {
	console.log(colors.green(msg));
};

export const error = (msg: string) => {
	console.error(colors.red(msg));
};

export const warning = (msg: string) => {
	console.warn(colors.yellow(msg));
};

export const info = (msg: string) => {
	console.info(colors.blue(msg));
};