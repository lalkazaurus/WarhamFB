import React from 'react'
import styles from './Banner.module.css'

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerContent}>Races</p>
    </div>
  );
}

export default Banner;