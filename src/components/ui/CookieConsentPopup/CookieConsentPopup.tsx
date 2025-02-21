import React, { useState } from 'react'
import CookieConsent, { resetCookieConsentValue } from 'react-cookie-consent'
import { GiCookie } from 'react-icons/gi'
import styles from './CookiePopup.module.css'

export default function CookiePopup() {
	const [showSettings, setShowSettings] = useState(true)
	const [cookies, setCookies] = useState({
		necessary: true,
		analytics: false,
		marketing: false,
	})

	const handleSettingsChange = type => {
		setCookies({ ...cookies, [type]: !cookies[type] })
	}

	const handleAccept = () => {
		document.cookie = `analytics=${cookies.analytics}`
		document.cookie = `marketing=${cookies.marketing}`
		localStorage.setItem('cookieConsent', JSON.stringify(cookies))
		setShowSettings(false)
	}

	const handleRevoke = () => {
		resetCookieConsentValue()
		setCookies({ necessary: true, analytics: false, marketing: false })
		localStorage.removeItem('cookieConsent')
		setShowSettings(true)
	}

	return (
		<div>
			<CookieConsent
				location='bottom'
				buttonText='Accept All'
				declineButtonText='Decline'
				enableDeclineButton
				onAccept={() => handleAccept()}
				onDecline={() => {
					setCookies({ necessary: true, analytics: false, marketing: false })
					localStorage.removeItem('cookieConsent')
				}}
				style={{ background: '#111', color: '#ffcc00' }}
				buttonStyle={{
					background: '#28a745',
					color: '#fff',
					borderRadius: '5px',
				}}
				declineButtonStyle={{
					background: '#dc3545',
					color: '#fff',
					borderRadius: '5px',
				}}
			>
				This website uses cookies to enhance your experience in accordance with
				GDPR requirements.{' '}
				<a
					href='/privacy-policy'
					style={{
						marginLeft: '10px',
						color: '#ffcc00',
						textDecoration: 'underline',
					}}
				>
					Privacy Policy
				</a>
			</CookieConsent>

			{showSettings && (
				<div className={styles.cookieSettings}>
					<h4 className={styles.header}>Cookie Settings</h4>
					<div className={styles.checkboxContainer}>
						<div className={styles.checkboxItem}>
							<input
								type='checkbox'
								checked={cookies.analytics}
								onChange={() => handleSettingsChange('analytics')}
							/>
							<span>Analytics Cookies</span>
						</div>
						<div className={styles.checkboxItem}>
							<input
								type='checkbox'
								checked={cookies.marketing}
								onChange={() => handleSettingsChange('marketing')}
							/>
							<span>Marketing Cookies</span>
						</div>
						<button className={styles.saveButton} onClick={handleAccept}>
							Save Preferences
						</button>
					</div>
				</div>
			)}

			<button className={styles.revokeButton} onClick={handleRevoke}>
				<GiCookie size={32} />
			</button>
		</div>
	)
}
