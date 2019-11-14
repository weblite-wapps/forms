import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    margin: '5px 20px 16px',
  },
  color: {
    width: 35,
    height: 35,
    borderRadius: 11,
    margin: 'auto',
  },
}))
const Color = ({ backgroundColor }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.color} style={{ backgroundColor }} />
    </div>
  )
}

Color.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Color
