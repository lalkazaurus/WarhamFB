export interface Game {
	id: number;
	title: string;
	image: string;
	text: string
}

export type GameCollection = {
  [key: number]: Game;
};