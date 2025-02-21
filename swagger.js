import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'WarhamFB API',
			version: '1.0.0',
			description: 'API documentation for WarhamFB app',
		},
	},
	apis: ['./src/services/*.ts'],
}

const swaggerDocs = swaggerJSDoc(options)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(3001, () => {
	console.log('Server is running on http://localhost:3001')
	console.log('Swagger docs are available at http://localhost:3001/api-docs')
})
