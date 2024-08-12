import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerContent}>Warhammer Fantasy Battles</p>
    </div>
  );
}

export default Banner;