import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import styles from './ErrorPage.module.css'

export default function ErrorPage() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>404</h1>
				<h2>Page not found</h2>
				<p>Sorry we couldn't find the page you're looking for.</p>
				<Link className={styles.homeLink} to={'/'}>
					Go back home
				</Link>
			</div>
			<Footer />
		</>
	)
}
