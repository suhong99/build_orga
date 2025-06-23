export class RefreshTokenError extends Error {
	constructor() {
		super('Token refresh failed');
		this.name = 'RefreshTokenError';
	}
}

export class ServerError extends Error {
	constructor() {
		super('server error');
		this.name = 'ServerError';
	}
}

export class NeedLoginError extends Error {
	constructor() {
		super('Need Login');
		this.name = 'NeedLoginError';
	}
}
