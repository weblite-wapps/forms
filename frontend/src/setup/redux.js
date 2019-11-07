// modules
import { createStore, combineReducers, compose } from 'redux'
// reducers
import reducers from '../app/app.reducer'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'formlite' })
    : compose

const store = createStore(combineReducers(reducers), composeEnhancers())

export default store
export const { dispatch, getState } = store
