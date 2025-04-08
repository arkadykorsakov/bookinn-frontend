import { Navigate, Route, Routes } from 'react-router';
import Header from './components/header';
import { useSelector } from 'react-redux';
import { getUserRole } from './selectors';
import React from 'react';
import router from './router';
import { AUTH_PATH } from './constants/routes';
import { ROLE } from './constants/roles';

function App() {
	const role = useSelector(getUserRole);
	const routes = React.useMemo(() => router[role], [role]);
	return (
		<div className="min-h-dvh flex flex-col">
			<Header />
			<main className="flex-auto p-4 flex flex-col">
				<Routes>
					{routes.map((route) => (
						<Route
							key={route.id}
							path={route.path}
							element={<route.component />}
						/>
					))}
					<Route
						path="*"
						element={role === ROLE.GUEST ? <Navigate to={AUTH_PATH} /> : <div>#404</div>}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
