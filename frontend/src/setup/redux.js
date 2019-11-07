// modules
import { createStore, compose } from 'redux'
// reducers
import reducers from './reducers'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ name: 'formlite' })
    : compose

const store = createStore(reducers, composeEnhancers())

export default store
export const { dispatch, getState } = store
