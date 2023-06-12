import {IUser} from './types';
import api from './api';

export function withUserData<T extends (...args: any[]) => Promise<void>>(func: T): T {
	return async function (this: any, user: IUser, ...args: Parameters<T>) {
		if (!user.id) {
			const {data} = await api.get('/auth/users/current/');
			await func.apply(this, [data, args]);
		} else {
			await func.apply(this, [user, args]);
		}
	} as T;
}
