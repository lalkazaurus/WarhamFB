import styles from './Carousel.module.css'

const Carousel = () => {
		return (
			<div className={styles.carousel}>
				<div className={styles.carouselItem}><img alt ='' src="https://spikeybits.com/wp-content/uploads/2017/02/com.totalwar.warhammer.share_.default.jpg"/></div>
				<div className={styles.carouselItem}><img alt ='' src="https://static.hitek.fr/img/actualite/2016/05/31/fb_warhammer.jpg" /></div>
				<div className={styles.carouselItem}><img alt = '' src="https://cdn.mos.cms.futurecdn.net/vfGvu4QRYc7pjwZ9F8vLHH-1200-80.jpg"/></div>
			</div>
		)
}

export default Carousel;