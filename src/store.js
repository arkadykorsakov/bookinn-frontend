import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { roomReducer, roomsReducer, userReducer } from './reducers';

const reducer = combineReducers({
	user: userReducer,
	rooms: roomsReducer,
	room: roomReducer,
})

const composeEnhancers =
	typeof window === 'object' &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose();

const enhancer = composeEnhancers(
	applyMiddleware(thunk),
);
export const store = createStore(reducer, enhancer);

