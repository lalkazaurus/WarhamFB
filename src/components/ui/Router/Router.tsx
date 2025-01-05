import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddRace from '../../screens/AddRace/AddRace.tsx'
import ErrorPage from '../../screens/errorPage/ErrorPage.tsx'
import Games from '../../screens/games/Games.tsx'
import Home from '../../screens/home/Home.tsx'
import Races from '../../screens/races/Races.tsx'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home/>,
		errorElement: <ErrorPage/>
	}, {
		path: "/races",
		element: <Races/>
	}, {
		path: "/games",
		element: <Games/>
	}, {
		path: "/addRace",
		element: <AddRace/>
	}
])

export default function Router() {
	return <RouterProvider router={router}/>
}