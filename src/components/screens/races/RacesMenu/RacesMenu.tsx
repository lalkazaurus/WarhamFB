import React from 'react'
import { Race } from '../../../../types/Race.ts'
import RaceItem from './RaceItem/RaceItem.tsx'

interface RaceMenuProps {
  data: Race[]; 
}

export default function RacesMenu({ data }: RaceMenuProps) {
	if (!data.length) {
		return <p>There are some troubles on server</p>;
	}

	return (
		<div>
			{data.map(race => (
				<RaceItem key={race.id} race={race}/>
			))}
		</div>
	);
}