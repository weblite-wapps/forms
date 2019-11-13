import React from 'react'
import PropTypes from 'prop-types'
// components
import Fab from '@material-ui/core/Fab'
import { makeStyles, darken } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#ccc',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: darken('#ccc', 0.1),
      boxShadow: 'none',
    },
    marginRight: 10,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  root: {
    marginBottom: 10,
  },
}))

const TextOptions = ({ onBold, onItalic, onUnderLine, onLink }) => {
  const classes = useStyles()
  return (
    <center className={classes.root}>
      <Fab size="small" className={classes.button} onClick={onBold}>
        <img src="assets/svg/bold.svg" alt="bold" />
      </Fab>
      <Fab size="small" className={classes.button} onClick={onItalic}>
        <img src="assets/svg/italic.svg" alt="italic" />
      </Fab>
      <Fab size="small" className={classes.button} onClick={onUnderLine}>
        <img src="assets/svg/underline.svg" alt="underline" />
      </Fab>
      <Fab size="small" className={classes.button} onClick={onLink}>
        <img src="assets/svg/link.svg" alt="hyperlink" />
      </Fab>
    </center>
  )
}

TextOptions.propTypes = {
  onBold: PropTypes.func.isRequired,
  onItalic: PropTypes.func.isRequired,
  onUnderLine: PropTypes.func.isRequired,
  onLink: PropTypes.func.isRequired,
}

export default TextOptions
