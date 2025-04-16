import React from 'react'
import Banner from './elements/banner/Banner.tsx'
import Carousel from './elements/carousel/Carousel.tsx'
import Footer from './elements/Footer/Footer.tsx'
import Header from './elements/Header/Header.tsx'
import TextBox from './elements/textBox/TextBox.tsx'

/**
 * Головна сторінка застосунку.
 *
 * Складається з декількох секцій:
 * - Header — верхня навігаційна панель.
 * - Banner — рекламний або презентаційний банер.
 * - TextBox — інформаційний блок із текстом.
 * - Carousel — галерея.
 * - Footer — нижній колонтитул із додатковою інформацією.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @example
 * return <Home />
 */
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
