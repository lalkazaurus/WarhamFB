import { AxiosResponse } from 'axios'
import api from '../http/index.ts'
import { AuthResponse } from '../types/AuthResponse.ts'

/**
 * Сервіс для роботи з авторизацією користувача.
 *
 * Містить методи:
 * - `login` — авторизація користувача
 * - `registration` — реєстрація нового користувача
 * - `logout` — вихід з акаунта (видалення сесії)
 */
export const AuthService = {
	/**
	 * Авторизує користувача за email та паролем.
	 *
	 * @param {string} email - Email користувача
	 * @param {string} password - Пароль користувача
	 * @returns {Promise<AxiosResponse<AuthResponse>>} - Відповідь з access та refresh токенами
	 *
	 * @example
	 * const response = await AuthService.login('test@mail.com', 'password123');
	 * console.log(response.data.accessToken);
	 */
	async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return api.post<AuthResponse>('/login', { email, password })
	},

	/**
	 * Реєструє нового користувача.
	 *
	 * @param {string} email - Email нового користувача
	 * @param {string} password - Пароль нового користувача
	 * @returns {Promise<AxiosResponse<AuthResponse>>} - Відповідь з токенами після реєстрації
	 *
	 * @example
	 * const response = await AuthService.registration('new@mail.com', 'password123');
	 */
	async registration(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return api.post<AuthResponse>('/registration', { email, password })
	},

	/**
	 * Вихід з акаунта. Скасовує сесію користувача на сервері.
	 *
	 * @returns {Promise<void>}
	 *
	 * @example
	 * await AuthService.logout();
	 */
	async logout(): Promise<void> {
		return api.post('/logout')
	},
}
