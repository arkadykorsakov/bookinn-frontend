import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import App from './app';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer />
		</Provider>
	</BrowserRouter>,
);
