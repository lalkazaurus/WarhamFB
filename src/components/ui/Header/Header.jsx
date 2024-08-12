import styles from './Header.module.css'

const Header = () => {
  return (
	<header className={styles.header}>
      <div className={styles.headerLogo}>
        <img className={styles.logoImage} src="/1.png" alt="Warhammer Logo" />
        <span className={styles.headerTitle}>WarhamFB</span>
      </div>
      <div className={styles.headerNav}>
        <ul>
          <li>Home Page</li>
          <li>Races</li>
          <li>Games</li>
          <li>Interesting Walkthroughs</li>
        </ul>
      </div>
    </header>
  )
}

export default Header; 