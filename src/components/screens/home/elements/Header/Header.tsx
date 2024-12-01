import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
	<header className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.logoImage} src="/1.png" alt="Warhammer Logo" />
        <span className={styles.headerTitle}>WarhamFB</span>
      </div>
      <div className={styles.headerNav}>
        <ul>
          <li><Link to="/">Home Page</Link></li>
          <li><Link to="/races">Races</Link></li>
          <li><Link to="/games">Games</Link></li>
        </ul>
      </div>
    </header>
  )
}