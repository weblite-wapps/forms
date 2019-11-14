import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 20px',
    height: 30,
    borderRadius: 11,
    backgroundColor: '#f0f0f0',
  },
  text: {
    direction: 'rtl',
    marginRight: 10,
    fontSize: 11,
    color: '#818181',
    fontWeight: 'Bold',
    lineHeight: '30px',
    letterSpacing: -0.08,
  },
}))
const PresentationLabel = ({ text }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text} align="right">
        {text}
      </Typography>
    </div>
  )
}

PresentationLabel.propTypes = {
  text: PropTypes.string.isRequired,
}

export default PresentationLabel
