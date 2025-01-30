import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { RaceService } from '../../../services/race.service.ts'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import RacesMenu from './RacesMenu/RacesMenu.tsx'

export default function Races() {
	const {
		data = [],
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['racesData'],
		queryFn: async () => {
			const response = await RaceService.getAllRaces()
			return response
		},
	})

	return (
		<div>
			<Header />
			{isLoading ? (
				<p>Loading races...</p>
			) : isError ? (
				<p>Error loading races</p>
			) : (
				<RacesMenu data={data} />
			)}
			<Footer />
		</div>
	)
}
