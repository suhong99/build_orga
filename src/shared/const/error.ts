export class RefreshTokenError extends Error {
	constructor() {
		super('Token refresh failed');
		this.name = 'RefreshTokenError';
	}
}
