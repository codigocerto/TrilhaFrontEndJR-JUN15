import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { StyleGlobal } from './styles'

const routes = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Banner />
			</>
		)
	}
])

function App() {
	return (
		<>
			<StyleGlobal />
			<div>
				<RouterProvider router={routes} />
			</div>
		</>
	)
}

export default App
