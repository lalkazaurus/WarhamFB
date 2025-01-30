import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../index.tsx'
import UserService from '../../../services/user.service.ts'
import { IUser } from '../../../types/User.ts'
import Footer from '../home/elements/Footer/Footer.tsx'
import Header from '../home/elements/Header/Header.tsx'
import styles from './Login.module.css'
import LoginForm from './LoginForm/LoginForm.tsx'

const Login = observer(() => {
	const { store } = useContext(Context)
	const [users, setUsers] = useState<IUser[]>([])

	useEffect(() => {
		if (localStorage.getItem('token')) store.checkAuth()
	}, [store])

	async function getUsers() {
		try {
			const response = await UserService.fetchUsers()
			setUsers(response.data)
		} catch (e) {
			console.log(e)
		}
	}

	if (!store) return <div>Error: Store is not available</div>

	if (store.isLoading) return <div>Loading...</div>

	if (!store.isAuth)
		return (
			<>
				<Header />
				<LoginForm />
				<Footer />
			</>
		)

	return (
		<>
			<Header />
			<div className={styles.container}>
				<div>
					<h1 className={styles.username}>
						{`User is authorized ${store.user.email}`}
					</h1>
					<h1 className={styles.status}>
						{store.user.isActivated
							? 'Account is activated'
							: 'ACTIVATE YOUR ACCOUNT'}
					</h1>
					<div className={styles.buttonContainer}>
						<button className={styles.logout} onClick={() => store.logout()}>
							Logout
						</button>
						<button className={styles.getUsers} onClick={getUsers}>
							Get users
						</button>
					</div>
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
