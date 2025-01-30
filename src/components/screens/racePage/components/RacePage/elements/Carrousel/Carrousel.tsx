import React, { useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { Character } from '../../../../../../../types/Character.ts'
import styles from './Carrousel.module.css'

type CarrouselProps = {
	characters: Character[]
}

export default function Carrousel({ characters }: CarrouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const handleNext = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === characters.length - 1 ? 0 : prevIndex + 1
		)
	}

	const handlePrev = () => {
		setCurrentIndex(prevIndex =>
			prevIndex === 0 ? characters.length - 1 : prevIndex - 1
		)
	}

	return (
		<div className={styles.carrousel}>
			<div
				className={styles.track}
				style={{
					transform: `translateX(-${currentIndex * 100}%)`,
				}}
			>
				{characters.map((character, index) => (
					<div key={index} className={styles.card}>
						<img
							src={character.image}
							alt={character.name}
							className={styles.image}
						/>
						<div className={styles.info}>
							<h2 className={styles.name}>{character.name}</h2>
							<p className={styles.description}>{character.text}</p>
						</div>
					</div>
				))}
			</div>

			<button
				className={`${styles.navButton} ${styles.leftButton}`}
				onClick={handlePrev}
			>
				<SlArrowLeft />
			</button>
			<button
				className={`${styles.navButton} ${styles.rightButton}`}
				onClick={handleNext}
			>
				<SlArrowRight />
			</button>

			<div className={styles.indicators}>
				{characters.map((_, index) => (
					<span
						key={index}
						className={`${styles.indicator} ${
							index === currentIndex ? styles.active : ''
						}`}
						onClick={() => setCurrentIndex(index)}
					></span>
				))}
			</div>
		</div>
	)
}
