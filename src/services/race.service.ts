import axios from 'axios'

export const RaceService = {
	async getAllRaces() {
		const response = await axios.get('http://localhost:5000/races');
		return response.data;
	},

	async getAllGames() {
		const response = await axios.get('http://localhost:5000/games');
		return response.data;
	}
}