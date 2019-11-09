import React from 'react'
import PropTypes from 'prop-types'
// style
import { makeStyles } from '@material-ui/core/styles'
// components
import Typography from '@material-ui/core/Typography'
import HelperButtons from './helperButtons'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flex: '1 1 100%',
    height: 35,
    margin: '0 20px 15px',
    backgroundColor: '#f0f0f0',
    border: '1.5px solid #ccc',
    boxSizing: 'border-box',
    paddingRight: 12,
    borderRadius: 11,
    overflow: 'hidden',
  },
  typography: {
    flex: '1 1 100%',
    color: '#818181',
    direction: 'rtl',
    lineHeight: '35px',
  },
}))

const Defaults = ({ type, onEdit }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <HelperButtons onEdit={onEdit} onDelete={null} onDuplicate={null} />
      <Typography variant="h1" noWrap className={classes.typography}>
        {type}
      </Typography>
    </div>
  )
}
Defaults.propTypes = {
  type: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
}
export default Defaults
