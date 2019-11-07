// modules
import React from 'react'
import ReactDOM from 'react-dom'
// third-party-packages
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './app/app'
// styles
import { theme } from './helper/style/theme'
import './setup/index.css'
import './setup/fonts/fonts.scss'

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
)
