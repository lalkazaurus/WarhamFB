/**
 * @swagger
 * components:
 *   schemas:
 *     Race:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *           description: Назва раси
 *         image:
 *           type: string
 *           description: URL зображення
 *         text:
 *           type: string
 *           description: Опис раси
 *       required:
 *         - title
 *         - image
 *         - text
 */

import axios from 'axios'
import { Character } from '../types/Character.ts'

export const RaceService = {
	/**
	 * @swagger
	 * /races:
	 *   get:
	 *     summary: Отримати всі раси
	 *     description: "Повертає масив об'єктів Race з MongoDB. Сервер побудований на базі NodeJS (mongoose та express), отримує записи з БД та відправляє їх на фронтенд. Об'єкти мають поля: title, image, text. Використовується на сторінці /races для побудови відповідних блоків."
	 *     responses:
	 *       200:
	 *         description: "Масив рас успішно отримано"
	 *       400:
	 *         description: "Помилка при завантаженні рас"
	 */
	async getAllRaces() {
		const response = await axios.get('http://localhost:5000/races')
		return response.data
	},

	/**
	 * @swagger
	 * /games:
	 *   get:
	 *     summary: Отримати всі ігри
	 *     description: "Повертає масив об'єктів Game з MongoDB. Сервер отримує записи з БД та відправляє їх на фронтенд. Об'єкти мають поля: title, image, text. Використовується на сторінці /games для побудови відповідних блоків."
	 *     responses:
	 *       200:
	 *         description: "Масив ігор успішно отримано"
	 *       400:
	 *         description: "Помилка при завантаженні ігор"
	 */
	async getAllGames() {
		const response = await axios.get('http://localhost:5000/games')
		return response.data
	},

	async getCharactersByRace(title: string): Promise<Character[]> {
		try {
			const response = await axios.post('http://localhost:5000/characters', {
				title,
			})
			return response.data
		} catch (error) {
			console.error('Error fetching characters by race:', error)
			throw new Error(
				error.response?.data?.error || 'Failed to fetch characters'
			)
		}
	},

	/**
	 * @swagger
	 * /races:
	 *   post:
	 *     summary: Додати запис Race в БД
	 *     description: "Отримуємо дані з форми в компоненті AddRace (на роуті /addRace). Дані проходять валідацію на фронтенді за допомогою react-hook-form, після чого відправляються на бекенд через axios (useQuery). На сервері перевіряється, чи існує раса з таким же title; якщо ні, то створюється новий запис в БД."
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Race'
	 *     responses:
	 *       201:
	 *         description: "Расу успішно додано до БД Mongo"
	 *       400:
	 *         description: "Створення раси не відбувається"
	 */
	async createRace(raceData) {
		try {
			const response = await axios.post('http://localhost:5000/races', raceData)
			return response.data
		} catch (error) {
			if (error.response) {
				console.error(
					`Error ${error.response.status}: ${
						error.response.data.message || 'Something went wrong'
					}`
				)
				throw new Error(error.response.data.message || 'Failed to create race')
			} else if (error.request) {
				console.error('No response received from server')
				throw new Error('No response from server')
			} else {
				console.error('Error:', error.message)
				throw new Error('An unexpected error occurred')
			}
		}
	},

	async createGame(gameData) {
		try {
			const response = await axios.post('http://localhost:5000/games', gameData)
			return response.data
		} catch (error) {
			if (error.response) {
				console.error(
					`Error ${error.response.status}: ${
						error.response.data.message || 'Something went wrong'
					}`
				)
				throw new Error(error.response.data.message || 'Failed to create game')
			} else if (error.request) {
				console.error('No response received from server')
				throw new Error('No response from server')
			} else {
				console.error('Error:', error.message)
				throw new Error('An unexpected error occurred')
			}
		}
	},

	async createCharacter(characterData) {
		try {
			const response = await axios.post(
				'http://localhost:5000/characters/add',
				characterData
			)
			return response.data
		} catch (error) {
			if (error.response) {
				console.error(
					`Error ${error.response.status}: ${
						error.response.data.message || 'Something went wrong'
					}`
				)
				throw new Error(
					error.response.data.message || 'Failed to create character'
				)
			} else if (error.request) {
				console.error('No response received from server')
				throw new Error('No response from server')
			} else {
				console.error('Error:', error.message)
				throw new Error('An unexpected error occurred')
			}
		}
	},

	async getRaceByTitle(title) {
		try {
			const response = await axios.get(`http://localhost:5000/races/${title}`)
			return response.data
		} catch (error) {
			if (error.response) {
				console.log(
					`Error ${error.response.status}: ${error.response.data.error}`
				)
				throw new Error(
					error.response.data.error || 'Failed to fetch race data'
				)
			} else {
				console.error('Network error:', error.message)
				throw new Error('Network error occurred')
			}
		}
	},
}
