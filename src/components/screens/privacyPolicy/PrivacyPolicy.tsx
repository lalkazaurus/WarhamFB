import React from 'react'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import styles from './PrivacyPolicy.module.css'

export default function PrivacyPolicy() {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<h1 className={styles.title}>Privacy Policy</h1>
				<p className={styles.text}>
					Your privacy is important to us. This policy explains what data we
					collect, how we use it, and how we protect it.
				</p>
				<h2 className={styles.subtitle}>Data Collection</h2>
				<p className={styles.text}>
					We collect personal information during registration or interaction
					with our website, including:
				</p>
				<ul className={styles.list}>
					<li>
						<strong>Email address</strong> (required for registration and
						authentication)
					</li>
					<li>
						<strong>Password</strong> (encrypted and securely stored)
					</li>
					<li>
						<strong>Cookies</strong> (used to improve site performance and
						analytics)
					</li>
				</ul>

				<h2 className={styles.subtitle}>Data Usage</h2>
				<p className={styles.text}>Collected data is used for:</p>
				<ul className={styles.list}>
					<li>Authentication and account management</li>
					<li>Improving website functionality and user experience</li>
					<li>Fulfilling legal obligations</li>
				</ul>

				<h2 className={styles.subtitle}>Data Protection</h2>
				<p className={styles.text}>
					We take strict measures to protect your data, including:
				</p>
				<ul className={styles.list}>
					<li>
						<strong>Encryption</strong> – passwords and sensitive data are
						stored securely.
					</li>
					<li>
						<strong>Access control</strong> – only authorized personnel have
						access to information.
					</li>
					<li>
						<strong>Security updates</strong> – regular checks to ensure
						compliance with security standards.
					</li>
				</ul>

				<h2 className={styles.subtitle}>Cookies</h2>
				<p className={styles.text}>We use cookies for:</p>
				<ul className={styles.list}>
					<li>
						<strong>Essential cookies</strong> – ensure the proper functioning
						of the website.
					</li>
					<li>
						<strong>Analytical cookies</strong> – help analyze site usage.
					</li>
					<li>
						<strong>Marketing cookies</strong> – used for personalized
						advertising.
					</li>
				</ul>

				<h2 className={styles.subtitle}>Policy Changes</h2>
				<p className={styles.text}>
					We may update this policy, and any changes will be published on this
					page.
				</p>

				<h2 className={styles.subtitle}>Contact</h2>
				<p className={styles.text}>
					If you have any questions regarding privacy, contact us through the
					contact form on our website.
				</p>
			</div>
			<Footer />
		</>
	)
}
