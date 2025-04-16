import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import styles from './ErrorPage.module.css'

/**
 * Компонент сторінки 404 (Not Found).
 *
 * Відображає повідомлення про те, що сторінку не знайдено,
 * а також містить навігаційне посилання для повернення на головну сторінку.
 *
 * Також рендерить заголовок (Header) і футер (Footer), як на інших сторінках сайту.
 *
 * @component
 * @example
 * return <ErrorPage />
 */
export default function ErrorPage() {
	return (
		<>
			{/* Заголовок сторінки */}
			<Header />

			<div className={styles.container}>
				{/* Код помилки */}
				<h1 className={styles.title}>404</h1>

				{/* Повідомлення про помилку */}
				<h2>Page not found</h2>
				<p>Sorry we couldn't find the page you're looking for.</p>

				{/* Посилання на головну */}
				<Link className={styles.homeLink} to={'/'}>
					Go back home
				</Link>
			</div>

			{/* Футер сторінки */}
			<Footer />
		</>
	)
}
