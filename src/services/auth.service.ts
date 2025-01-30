import { AxiosResponse } from 'axios'
import api from '../http/index.ts'
import { AuthResponse } from '../types/AuthResponse.ts'

export const AuthService = {
	async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return api.post<AuthResponse>('/login', { email, password })
	},

	async registration(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return api.post<AuthResponse>('/registration', { email, password })
	},

	async logout(): Promise<void> {
		return api.post('/logout')
	},
}
