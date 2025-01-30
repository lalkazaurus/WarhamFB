import React from 'react'
import { Game } from '../../../../../../types/Game.ts'
import styles from './GameItem.module.css'

interface GameItemProps {
	game: Game
}

export default function GameItem({ game }: GameItemProps) {
	return (
		<div className={styles.gameItem}>
			<img src={game.image} alt={game.title} />
			<div className={styles.gameItemContent}>
				<h1>{game.title}</h1>
				<p>{game.text}</p>
			</div>
		</div>
	)
}
