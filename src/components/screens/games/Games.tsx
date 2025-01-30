import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Game } from '../../../../../types/Game.ts'
import { RaceService } from '../../../services/race.service.ts'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import Banner from './elements/GameMenu/Banner/Banner.tsx'
import GameMenu from './elements/GameMenu/GameMenu.tsx'

export default function Games() {
	const {
		data = [],
		isLoading,
		isError,
	} = useQuery<Game[]>({
		queryKey: ['gamesData'],
		queryFn: async () => {
			const response = await RaceService.getAllGames()
			return Object.values(response)
		},
	})

	return (
		<div>
			<Banner />
			<Header />
			{isLoading ? (
				<p>Loading games...</p>
			) : isError ? (
				<p>Error loading games</p>
			) : (
				<GameMenu data={data} />
			)}
			<Footer />
		</div>
	)
}
