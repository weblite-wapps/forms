import React from 'react'
import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '5px 20px 16px',
  },
  text: {
    whiteSpace: 'pre-wrap',
    fontWeight: 'Bold',
    fontSize: 12,
    marginRight: 10,
    marginLeft: 10,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
}))
const Text = ({ label, text }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.text} dir="auto" align="right">
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
