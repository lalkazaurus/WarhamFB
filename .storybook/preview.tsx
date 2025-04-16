import type { Preview } from '@storybook/react'
import React from 'react'

const withRouter = (Story: any) => <Story />

const preview: Preview = {
	decorators: [withRouter],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
