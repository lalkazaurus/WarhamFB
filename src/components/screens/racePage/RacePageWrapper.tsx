import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useParams } from 'react-router-dom'
import { RaceService } from '../../../services/race.service.ts'
import { Race } from '../../../types/Race.ts'
import ErrorPage from '../errorPage/ErrorPage.tsx'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import RacePage from './components/RacePage/RacePage.tsx'

export default function RacePageWrapper() {
	const { title } = useParams()
	let resultedTitle = title
		?.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ')

	const { data: race, isLoading } = useQuery<Race>({
		queryKey: ['race', resultedTitle],
		queryFn: async () => {
			if (!resultedTitle) {
				throw new Error('Title is undefined')
			}
			return await RaceService.getRaceByTitle(resultedTitle)
		},
		retry: false,
	})

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!race) {
		return <ErrorPage />
	}

	return (
		<>
			<Header />
			<RacePage race={race} />
			<Footer />
		</>
	)
}
