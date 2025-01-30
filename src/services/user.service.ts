import { AxiosResponse } from 'axios'
import api from '../http/index.ts'
import { IUser } from '../types/User'

export default class UserService {
	static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
		return api.get<IUser[]>('/users')
	}
}
