import React from 'react'
import { Race } from '../../../../../../../types/Race.ts'
import styles from './Banner.module.css'

type BannerProps = {
	race: Race
}

export default function Banner({ race }: BannerProps) {
	return (
		<div
			style={{ backgroundImage: `url(${race.image})` }}
			className={styles.banner}
		>
			<p className={styles.bannerContent}>{race.title}</p>
		</div>
	)
}
