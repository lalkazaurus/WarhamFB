import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../index.tsx'
import { IUserLogin } from '../../../../types/User.ts'
import styles from './RegisterForm.module.css'

const RegisterForm = observer(() => {
	const { store } = useContext(Context)
	const navigate = useNavigate()

	const { register, handleSubmit, reset, formState } = useForm({
		mode: 'onChange',
	})

	const emailError = formState.errors['email']?.message
	const passwordError = formState.errors['password']?.message

	const onSubmit = (data: IUserLogin) => {
		store.registration(data.email, data.password)
		navigate('/login')
	}

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Register</h1>
				<input
					placeholder='Email'
					{...register('email', {
						required: 'Email is required',
						pattern: {
							value:
								/[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
							message: 'This text has to be an email',
						},
					})}
				/>
				{emailError && <p className={styles.error}>{emailError}</p>}
				<input
					type='password'
					placeholder='Password'
					{...register('password', {
						required: 'Password is required',
						pattern: {
							value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
							message: 'Your password not strong enough',
						},
					})}
				/>
				{passwordError && <p className={styles.error}>{passwordError}</p>}
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
})

export default RegisterForm
