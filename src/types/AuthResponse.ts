import { IUser } from './User.ts'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}
