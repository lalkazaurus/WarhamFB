export interface Game {
	title: string
	image: string
	text: string
}

export type GameCollection = {
	[key: number]: Game
}
