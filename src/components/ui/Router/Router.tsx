import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddCharacter from '../../screens/addCharacter/addCharacter.tsx'
import AddGame from '../../screens/addGame/AddGame.tsx'
import AddRace from '../../screens/AddRace/AddRace.tsx'
import ErrorPage from '../../screens/errorPage/ErrorPage.tsx'
import Games from '../../screens/games/Games.tsx'
import Home from '../../screens/home/Home.tsx'
import Login from '../../screens/login/Login.tsx'
import PrivacyPolicy from '../../screens/privacyPolicy/PrivacyPolicy.tsx'
import RacePageWrapper from '../../screens/racePage/RacePageWrapper.tsx'
import Races from '../../screens/races/Races.tsx'
import Register from '../../screens/register/Register.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/races',
		element: <Races />,
	},
	{
		path: '/games',
		element: <Games />,
	},
	{
		path: '/addRace',
		element: <AddRace />,
	},
	{
		path: 'addGame',
		element: <AddGame />,
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: '/races/:title',
		element: <RacePageWrapper />,
	},
	{
		path: '/addCharacter',
		element: <AddCharacter />,
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPolicy />,
	},
])

export default function Router() {
	return <RouterProvider router={router} />
}
