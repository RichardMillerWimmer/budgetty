import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
    budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

