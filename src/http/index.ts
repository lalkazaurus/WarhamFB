import axios, { AxiosResponse } from 'axios'
import { AuthResponse } from '../types/AuthResponse.ts'

/**
 * Базовий URL для всіх запитів, що стосуються авторизації.
 */
export const API_URL = `http://localhost:5000/auth`

/**
 * Axios-інстанс для роботи з авторизованими запитами.
 *
 * Налаштовано:
 * - `withCredentials: true` — дозволяє надсилати cookies
 * - `baseURL: API_URL` — базовий префікс для всіх запитів
 *
 * Також встановлені інтерцептори:
 * - Додає `Authorization` header з токеном
 * - Оновлює access токен у разі 401 помилки
 */
const api = axios.create({
	withCredentials: true,
	baseURL: API_URL,
})

/**
 * Інтерцептор запитів:
 * додає токен авторизації з localStorage до кожного запиту
 */
api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
	return config
})

/**
 * Інтерцептор відповідей:
 * При помилці 401 (Unauthorized) намагається оновити access токен через /refresh.
 * Якщо оновлення пройшло успішно — повторює оригінальний запит.
 * Якщо ні — виводить повідомлення в консоль і передає помилку далі.
 */
api.interceptors.response.use(
	(config: AxiosResponse) => {
		// Успішна відповідь — нічого не змінюємо
		return config
	},
	async error => {
		const originalRequest = error.config

		// Якщо токен недійсний і запит ще не був повторений
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				// Запит на оновлення токена
				const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				})
				// Зберігаємо новий accessToken
				localStorage.setItem('token', response.data.accessToken)

				// Повторюємо оригінальний запит
				return api.request(originalRequest)
			} catch (e) {
				console.log('You are not authorized')
			}
		}

		// Якщо інша помилка або refresh не спрацював
		throw error
	}
)

export default api
