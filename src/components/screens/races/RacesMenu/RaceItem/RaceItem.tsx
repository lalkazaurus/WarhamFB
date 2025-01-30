import React from 'react'
import { Link } from 'react-router-dom'
import { useFullscreen } from '../../../../../hooks/useFullScreen.tsx'
import { Race } from '../../../../../types/Race'
import styles from './RaceItem.module.css'

interface RaceItemProps {
	race: Race
}

export default function RaceItem({ race }: RaceItemProps) {
	const { toggleFullscreen } = useFullscreen()

	const handleToggleFullscreen = (e: React.MouseEvent<HTMLDivElement>) => {
		toggleFullscreen(e.currentTarget as HTMLElement)
	}

	let titleForLink = race.title
		.split(' ')
		.map(word => word[0].toLowerCase() + word.slice(1))
		.join('-')

	return (
		<>
			<div className={styles.raceItem} onClick={handleToggleFullscreen}>
				<img src={race.image} alt={race.title} />
				<h1>{race.title}</h1>
				<p>{race.text}</p>
			</div>
			<Link className={styles.link} to={`/races/${titleForLink}`}>
				See more...
			</Link>
		</>
	)
}
