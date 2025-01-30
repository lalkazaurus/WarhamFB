import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { RaceService } from '../../../../../services/race.service.ts'
import { Character } from '../../../../../types/Character.ts'
import styles from './AddForm.module.css'

export default function AddForm() {
	const { register, reset, handleSubmit, formState } = useForm<Character>({
		mode: 'onChange',
	})

	const nameError = formState.errors['name']?.message
	const textError = formState.errors['text']?.message
	const imageError = formState.errors['image']?.message

	async function onSubmit(data: Character) {
		try {
			const result = await RaceService.createCharacter(data)
			console.log('Character created successfully:', result)
		} catch (error) {
			console.error('Error creating character:', error.message)
			console.log(`Error: ${error.message}`)
		}
		reset()
	}

	const { data = [] } = useQuery({
		queryKey: ['racesData'],
		queryFn: async () => {
			const response = await RaceService.getAllRaces()
			return response
		},
	})

	return (
		<>
			<div className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Please enter data</h1>
					<input
						placeholder='Name'
						{...register('name', {
							required: 'Name is required',
							minLength: {
								value: 3,
								message: 'Name has to be longer than 3 symbols',
							},
							pattern: {
								value: /^[A-Z][a-zA-Z0-9\s\.,!?'"()\-]*$/,
								message: 'The name has to start from capital letter',
							},
						})}
					/>
					{nameError && <p className={styles.error}>{nameError}</p>}
					<input
						placeholder='ImageURL'
						{...register('image', {
							required: 'Image link is required',
							pattern: {
								value:
									/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
								message: 'The image has to be a valid URL',
							},
						})}
					/>
					{imageError && <p className={styles.error}>{imageError}</p>}
					<textarea
						placeholder='Main information'
						{...register('text', {
							required: 'Main information is required',
							minLength: {
								value: 20,
								message: 'Text has to be longer than 20 symbols',
							},
							pattern: {
								value: /^[A-Z][a-zA-Z0-9\s\.,!?'"()\-]*$/,
								message: 'The text has to start from capital letter',
							},
						})}
					/>
					{textError && <p className={styles.error}>{textError}</p>}
					<select
						{...register('race', {
							required: 'Please choose race of character',
						})}
					>
						{data.map(race => (
							<option key={race.name}>{race.title}</option>
						))}
					</select>
					<div className={styles.buttonContainer}>
						<button className={styles.submit} type='submit'>
							Send
						</button>
						<button className={styles.reset} onClick={() => reset()}>
							Reset
						</button>
					</div>
				</form>
			</div>
		</>
	)
}
