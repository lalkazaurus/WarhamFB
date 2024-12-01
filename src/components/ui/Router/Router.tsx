import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
	}
])

export default function Router() {
	return <RouterProvider router={router}/>
}