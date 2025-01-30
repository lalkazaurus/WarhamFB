import React from 'react'
import styles from './Banner.module.css'

export default function Banner() {
	return (
		<div className={styles.banner}>
			<p className={styles.bannerContent}>Warhammer Fantasy Battles</p>
		</div>
	)
}
