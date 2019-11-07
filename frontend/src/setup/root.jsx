import React from 'react'
import { Provider } from 'react-redux'
import App from '../app/main/app.container'
import store from './redux'

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
