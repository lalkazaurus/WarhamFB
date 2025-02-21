import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import CookiePopup from './components/ui/CookieConsentPopup/CookieConsentPopup.tsx'
import Router from './components/ui/Router/Router.tsx'
import './index.css'
import AuthStore from './stores/authStore.ts'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root')!)

interface State {
	store: AuthStore
}

const store = new AuthStore()

export const Context = createContext<State>({
	store,
})

root.render(
	<React.StrictMode>
		<Context.Provider
			value={{
				store,
			}}
		>
			<QueryClientProvider client={queryClient}>
				<Router />
				<CookiePopup />
			</QueryClientProvider>
		</Context.Provider>
	</React.StrictMode>
)
