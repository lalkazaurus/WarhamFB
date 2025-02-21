import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { RaceService } from '../../../../../services/race.service.ts'
import { Character } from '../../../../../types/Character.ts'
import { Race } from '../../../../../types/Race.ts'
import Banner from './elements/Banner/Banner.tsx'
import Carrousel from './elements/Carrousel/Carrousel.tsx'
import styles from './RacePage.module.css'

type RacePageProps = {
	race: Race
}

export default function RacePage({ race }: RacePageProps) {
	const {
		data: characters,
		isLoading,
		error,
	} = useQuery<Array<Character>>({
		queryKey: ['characters', race.title],
		queryFn: async () => {
			if (!race || !race.title) {
				throw new Error('Race title is required')
			}
			return await RaceService.getCharactersByRace(race.title)
		},
		retry: false,
	})

	if (error) {
		return (
			<>
				<Banner race={race} />
				<h1 className={styles.bigText}>Heroes</h1>
				<div className={styles.errorBlock}>
					Error loading characters: {error.message}
				</div>
				<h1 className={styles.bigText}>General</h1>
				<div className={styles.textBox}>
					<p>{race.text}</p>
				</div>
			</>
		)
	}

	return (
		<>
			<Banner race={race} />
			<h1 className={styles.bigText}>Heroes</h1>
			{isLoading ? (
				<div>Characters is loading...</div>
			) : (
				<Carrousel characters={characters} />
			)}
			<h1 className={styles.bigText}>General</h1>
			<div className={styles.textBox}>
				<p>{race.text}</p>
			</div>
		</>
	)
}
