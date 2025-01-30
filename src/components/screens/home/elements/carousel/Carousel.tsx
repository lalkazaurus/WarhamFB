import React from 'react'
import styles from './Carousel.module.css'

export default function Carousel() {
	return (
		<div className={styles.carousel}>
			<div className={styles.carouselItem}>
				<img
					alt=''
					src='https://orig00.deviantart.net/b417/f/2014/178/5/1/5100190d18c400b3796087368cde9037-d7o60ul.jpg'
				/>
			</div>
			<div className={styles.carouselItem}>
				<img
					alt=''
					src='https://static.hitek.fr/img/actualite/2016/05/31/fb_warhammer.jpg'
				/>
			</div>
			<div className={styles.carouselItem}>
				<img
					alt=''
					src='https://cdn.mos.cms.futurecdn.net/vfGvu4QRYc7pjwZ9F8vLHH-1200-80.jpg'
				/>
			</div>
		</div>
	)
}
