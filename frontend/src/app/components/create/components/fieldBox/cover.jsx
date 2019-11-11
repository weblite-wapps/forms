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
    flexDirection: 'column',
    margin: '0 20px 15px',
    border: '1.5px solid #ccc',
    overflow: 'hidden',
    borderRadius: 11,
  },

  head: {
    display: 'flex',
    flex: '1 1 100%',
    borderBottom: '1.5px solid #ccc',
    backgroundColor: '#f0f0f0',
    boxSizing: 'border-box',
    paddingRight: 12,
    borderRadius: '11px 11px 0 0',
  },

  typography: {
    flex: '1 1 100%',
    color: '#818181',
    direction: 'rtl',
    lineHeight: '35px',
    height: 35,
  },
  title: {
    direction: 'rtl',
    lineHeight: '35px',
    paddingRight: 9,
    height: 35,
  },
  draggableIcon: {
    cursor: 'move',
    margin: 'auto 0 auto 9px',
  },
}))

const Cover = ({ type, title, ...other }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <HelperButtons {...other} />
        <Typography variant="h1" noWrap className={classes.typography}>
          {type}
        </Typography>
        <img
          draggable={false}
          src="assets/svg/draggable.svg"
          alt="draggable"
          className={classes.draggableIcon}
        />
      </div>
      <Typography className={classes.title} noWrap>
        {title}
      </Typography>
    </div>
  )
}
Cover.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDuplicate: PropTypes.func.isRequired,
}
export default Cover
