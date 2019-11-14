import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '5px 20px 16px',
    backgroundColor: '#818181',
    borderRadius: 11,
    height: 30,
  },
  text: {
    whiteSpace: 'pre-wrap',
    fontWeight: 'Bold',
    color: '#fff',
    fontSize: 11,
    lineHeight: '30px',
    letterSpacing: -0.08,
  },
}))
const Text = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text} dir="auto" align="center">
        {text}
      </Typography>
    </div>
  )
}

Text.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Text
