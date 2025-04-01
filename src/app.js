import { Route, Routes } from 'react-router';
import ROUTES from './router';
import Header from './components/header';

function App() {
	return (
		<div className="min-h-dvh flex flex-col">
			<Header />
			<main className="flex-auto p-4 flex flex-col">
				<Routes>
					{ROUTES.map((route) => (
						<Route
							key={route.id}
							path={route.path}
							element={<route.component />}
						/>
					))}
				</Routes>
			</main>
		</div>
	);
}

export default App;
