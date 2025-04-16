import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { API_URL } from '../http/index.ts'
import { AuthService } from '../services/auth.service.ts'
import { AuthResponse } from '../types/AuthResponse.ts'
import { IUser } from '../types/User.ts'

/**
 * MobX store для керування авторизацією користувача.
 *
 * Відповідає за:
 * - зберігання інформації про користувача
 * - стан авторизації (авторизований/неавторизований)
 * - логін, реєстрацію, вихід та перевірку сесії
 */
export default class AuthStore {
	/** Поточний користувач */
	user = {} as IUser

	/** Чи авторизований користувач */
	isAuth = false

	/** Чи триває авторизаційна перевірка */
	isLoading = false

	constructor() {
		// Автоматичне відстеження станів та методів
		makeAutoObservable(this)
	}

	/**
	 * Встановлює статус авторизації.
	 * @param {boolean} bool - true, якщо користувач авторизований
	 */
	setAuth(bool: boolean) {
		this.isAuth = bool
	}

	/**
	 * Встановлює поточного користувача.
	 * @param {IUser} user - Об'єкт користувача
	 */
	setUser(user: IUser) {
		this.user = user
	}

	/**
	 * Встановлює статус завантаження.
	 * @param {boolean} isLoading - Чи відбувається перевірка сесії/авторизація
	 */
	setLoading(isLoading: boolean) {
		this.isLoading = isLoading
	}

	/**
	 * Авторизує користувача за email та паролем.
	 * Зберігає токен у localStorage, встановлює статус авторизації та користувача.
	 *
	 * @param {string} email - Email користувача
	 * @param {string} password - Пароль користувача
	 */
	async login(email: string, password: string) {
		try {
			const response = await AuthService.login(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}

	/**
	 * Реєструє нового користувача.
	 * Після успішної реєстрації виконується вхід.
	 *
	 * @param {string} email - Email нового користувача
	 * @param {string} password - Пароль
	 */
	async registration(email: string, password: string) {
		try {
			const response = await AuthService.registration(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}

	/**
	 * Виходить з облікового запису.
	 * Скидає токен, статус і користувача.
	 */
	async logout() {
		try {
			await AuthService.logout()
			localStorage.removeItem('token')
			this.setAuth(false)
			this.setUser({} as IUser)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		}
	}

	/**
	 * Перевіряє актуальність сесії користувача.
	 * Якщо refresh-токен дійсний — оновлює access-токен і встановлює користувача.
	 */
	async checkAuth() {
		this.setLoading(true)
		try {
			const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
				withCredentials: true,
			})
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (e: any) {
			console.log(e.response?.data?.message)
		} finally {
			this.setLoading(false)
		}
	}
}
