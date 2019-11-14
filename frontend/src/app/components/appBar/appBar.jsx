// modules
import React from 'react'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// style
import './appBar.scss'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles(theme => ({
  regular: {
    minHeight: 50,
  },
}))

const AppBar = () => {
  const classes = useStyles()
  return (
    <MuiAppBar position="static">
      <Toolbar classes={classes} className="c--appBar_toolbar">
        <img alt="appbar" src="assets/svg/logo.svg" />

        <div className="c--appBar_typo">
          <span className="c--appBar_form iranyekan">FORM</span>
          <span className="c--appBar_title iranyekan">
            فـــــــــــــــــــرم
          </span>
        </div>
      </Toolbar>
    </MuiAppBar>
  )
}
export default AppBar
