import axios from 'axios'
import { Character } from '../types/Character.ts'

export const RaceService = {
	/**
	 * @swagger
	 * /races:
	 *   get:
	 *     summary: Get all races
	 *     description: Returns a list of all races from the database.
	 *     responses:
	 *       200:
	 *         description: Successful request, list of races.
	 *       400:
	 *         description: Error fetching data.
	 */
	async getAllRaces() {
		const response = await axios.get('http://localhost:5000/races')
		return response.data
	},

	/**
	 * @swagger
	 * /games:
	 *   get:
	 *     summary: Get all games
	 *     description: Returns a list of all games from the database.
	 *     responses:
	 *       200:
	 *         description: Successful request, list of games.
	 *       400:
	 *         description: Error fetching data.
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
