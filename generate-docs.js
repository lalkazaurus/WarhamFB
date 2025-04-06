import fs from 'fs'
import path from 'path'
import reactDocgen from 'react-docgen'

const componentPath = path.resolve('src', 'components', 'screens')
const outputPath = path.resolve('documentation.json')

const getAllFiles = dir => {
	let results = []

	const list = fs.readdirSync(dir, { withFileTypes: true })

	list.forEach(file => {
		const fullPath = path.join(dir, file.name)

		if (file.isDirectory()) {
			results = results.concat(getAllFiles(fullPath))
		} else {
			if (
				file.name.endsWith('.jsx') ||
				file.name.endsWith('.tsx') ||
				file.name.endsWith('.js') ||
				file.name.endsWith('.ts')
			) {
				results.push(fullPath)
			}
		}
	})

	return results
}

const generateDocs = () => {
	if (!fs.existsSync(componentPath)) {
		console.log(`❌ Директорія не знайдена: ${componentPath}`)
		return
	}

	const components = getAllFiles(componentPath)

	console.log(`📦 Знайдено файлів: ${components.length}`)
	console.log(`📁 Файли: \n${components.join('\n')}\n`)

	if (components.length === 0) {
		console.log('⚠️ Не знайдено компонентів для генерації документації.')
		return
	}

	const docs = []

	components.forEach(component => {
		const componentFile = fs.readFileSync(component, 'utf8')
		try {
			const parsed = reactDocgen.parse(componentFile)
			docs.push({
				file: component,
				component: parsed,
			})
		} catch (err) {
			console.warn(`⚠️ Помилка у файлі ${component}:\n   ${err.message}`)
		}
	})

	if (docs.length === 0) {
		console.log('⚠️ Жодного валідного компонента не знайдено.')
		return
	}

	fs.writeFileSync(outputPath, JSON.stringify(docs, null, 2))
	console.log(`✅ Документація успішно згенерована у файл: ${outputPath}`)
}

generateDocs()
