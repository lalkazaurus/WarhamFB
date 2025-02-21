import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Game } from '../../../../../../types/Game.ts'
import GameItem from './GameItem.tsx'

const meta: Meta<typeof GameItem> = {
	title: 'Components/GameItem',
	component: GameItem,
	decorators: [
		Story => (
			<MemoryRouter>
				<Story />
			</MemoryRouter>
		),
	],
	argTypes: {
		game: {
			control: 'object',
		},
	},
}

export default meta
type Story = StoryObj<typeof GameItem>

const sampleGame1: Game = {
	title: 'The Witcher 3: Wild Hunt',
	image:
		'https://m.media-amazon.com/images/M/MV5BNTQ2NjNkMTItNjViYy00MjhlLTgxMTEtOTM1ODJiNmFiMmJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
	text: 'An open-world RPG where you play as Geralt of Rivia, a monster hunter.',
}

const sampleGame2: Game = {
	title: 'The Last of Us',
	image:
		'https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg',
	text: 'A story-driven survival game about Joel and Ellie, navigating a post-apocalyptic world.',
}

const sampleGame3: Game = {
	title: 'Cyberpunk 2077',
	image:
		'https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg',
	text: 'A futuristic RPG set in the neon-lit world of Night City.',
}

export const TheLastOfUs: Story = {
	args: {
		game: sampleGame2,
	},
}

export const Cyberpunk2077: Story = {
	args: {
		game: sampleGame3,
	},
}

export const Witcher3: Story = {
	args: {
		game: sampleGame1,
	},
}
