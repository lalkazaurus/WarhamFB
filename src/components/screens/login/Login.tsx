import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index.tsx'
import UserService from '../../../services/user.service.ts'
import { IUser } from '../../../types/User.ts'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import styles from './Login.module.css'
import LoginForm from './LoginForm/LoginForm.tsx'

/**
 * Сторінка логіну з підтримкою MobX (авторизація, перевірка токена, отримання користувачів).
 *
 * В залежності від стану:
 * - показує форму логіну (якщо не авторизовано),
 * - або профіль користувача з можливістю логауту та завантаженням списку користувачів.
 *
 * @component
 * @returns {JSX.Element}
 *
 * @example
 * return <Login />
 */
const Login = observer(() => {
	const { store } = useContext(Context)

	/** Локальний стан для збереження списку користувачів */
	const [users, setUsers] = useState<Array<IUser>>([])

	/**
	 * При монтуванні компонента перевіряє наявність токена і,
	 * якщо він є — викликає авторизацію через MobX store.
	 */
	useEffect(() => {
		if (localStorage.getItem('token')) store.checkAuth()
	}, [store])

	/**
	 * Асинхронна функція для отримання списку користувачів.
	 * Встановлює відповідь у локальний стан.
	 */
	async function getUsers() {
		try {
			const response = await UserService.fetchUsers()
			setUsers(response.data)
		} catch (e) {
			console.log(e)
		}
	}

	// Якщо store не доступний (edge case)
	if (!store) return <div>Error: Store is not available</div>

	// Поки триває перевірка токена / авторизації
	if (store.isLoading) return <div>Loading...</div>

	// Якщо користувач не авторизований — показуємо форму входу
	if (!store.isAuth)
		return (
			<>
				<Header />
				<LoginForm />
				<Footer />
			</>
		)

	// Якщо користувач авторизований — показуємо дані користувача
	return (
		<>
			<Header />
			<div className={styles.container}>
				<div>
					{/* Email користувача */}
					<h1 className={styles.username}>
						{`User is authorized ${store.user.email}`}
					</h1>

					{/* Статус активації акаунта */}
					<h1 className={styles.status}>
						{store.user.isActivated
							? 'Account is activated'
							: 'ACTIVATE YOUR ACCOUNT'}
					</h1>

					{/* Кнопки: Logout і Get Users */}
					<div className={styles.buttonContainer}>
						<button className={styles.logout} onClick={() => store.logout()}>
							Logout
						</button>
						<button className={styles.getUsers} onClick={getUsers}>
							Get users
						</button>
					</div>

					{/* Виведення списку користувачів */}
					{users.map(user => (
						<div className={styles.user} key={user.email}>
							{user.email}
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	)
})

export default Login
