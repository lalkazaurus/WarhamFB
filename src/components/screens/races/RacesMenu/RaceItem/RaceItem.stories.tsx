import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Race } from '../../../../../types/Race.ts'
import RaceItem from './RaceItem.tsx'

const meta: Meta<typeof RaceItem> = {
	title: 'Components/RaceItem',
	component: RaceItem,
	decorators: [
		Story => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
	argTypes: {
		race: {
			control: 'object',
		},
	},
}

export default meta
type Story = StoryObj<typeof RaceItem>

const sampleRace: Race = {
	title: "The Dragon's Run",
	image:
		'https://contentful.harrypotter.com/usf1vwtuqyxm/40Sp4ysyqcYKkQSwWG8WI6/8fa8b6ffdb3490d62c722d056b8bec48/Dragon-calendar-carousel.jpg?q=75&fm=jpg&w=2560',
	text: 'A legendary race between mighty dragons, spanning across enchanted lands and dangerous skies.',
}

export const Default: Story = {
	args: {
		race: sampleRace,
	},
}

export const LongText: Story = {
	args: {
		race: {
			...sampleRace,
			text: "In the Dragon's Run, competitors soar across treacherous mountains, through mystical forests, and over ancient ruins. The race is known to be one of the deadliest challenges ever faced by any creature.",
		},
	},
}

export const WithoutImage: Story = {
	args: {
		race: {
			...sampleRace,
			image: '',
		},
	},
}
