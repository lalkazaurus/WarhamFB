import React from 'react'
import Banner from './elements/banner/Banner.tsx'
import Carousel from './elements/carousel/Carousel.tsx'
import Footer from './elements/Footer/Footer.tsx'
import Header from './elements/Header/Header.tsx'
import TextBox from './elements/textBox/TextBox.tsx'

export default function Home() {

	return (
		<div>
			<Header />
			<Banner />
			<TextBox />
			<Carousel />
			<Footer />
		</div>
	)
}