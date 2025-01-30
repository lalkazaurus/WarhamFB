import React from 'react'
import { useForm } from 'react-hook-form'
import { RaceService } from '../../../../../services/race.service.ts'
import { Race } from '../../../../../types/Race.tsx'
import styles from './AddForm.module.css'

export default function AddForm() {
	const { register, reset, handleSubmit, formState } = useForm<Race>({
		mode: 'onChange',
	})

	const titleError = formState.errors['title']?.message
	const textError = formState.errors['text']?.message
	const imageError = formState.errors['image']?.message

	async function onSubmit(raceData) {
		try {
			const result = await RaceService.createRace(raceData)
			console.log('Race created successfully:', result)
		} catch (error) {
			console.error('Error creating race:', error.message)
			console.log(`Error: ${error.message}`)
		}
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Please enter data</h1>
				<input
					placeholder='Title'
					{...register('title', {
						required: 'Title is required',
						minLength: {
							value: 3,
							message: 'Title has to be longer than 3 symbols',
						},
						pattern: {
							value: /^[A-Z][a-zA-Z0-9\s\.,!?'"()\-]*$/,
							message: 'The title has to start from capital letter',
						},
					})}
				/>
				{titleError && <p className={styles.error}>{titleError}</p>}
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
	)
}
