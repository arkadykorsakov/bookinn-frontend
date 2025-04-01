import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
// import { thunk } from 'redux-thunk';
import { userReducer } from './reducers';

const reducer = combineReducers({
	user: userReducer,
})


const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose();

const enhancer = composeEnhancers(
	applyMiddleware(),
	// other store enhancers if any
);
export const store = createStore(reducer, enhancer);

// export const store = createStore(reducer, applyMiddleware(thunk));
