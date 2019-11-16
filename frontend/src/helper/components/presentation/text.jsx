import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 20px 16px',
  },
  label: {
    color: '#e6494f',
    direction: 'rtl',
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: -0.11,
    marginBottom: 13,
  },
  body: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
}))
const Text = ({ label, text }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography align="right" noWrap className={classes.label}>
        {label}
      </Typography>
      <Typography className={classes.body} dir="auto" align="right">
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
