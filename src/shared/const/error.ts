export class RefreshTokenError extends Error {
	constructor() {
		super('Token refresh failed');
		this.name = 'RefreshTokenError';
	}
}

export class NeedLoginError extends Error {
	constructor() {
		super('Need Login');
		this.name = 'NeedLoginError';
	}
}
