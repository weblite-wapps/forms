import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles, darken } from '@material-ui/core/styles'
import { getDirection } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  root: {
    margin: '5px 20px 16px',
    display: 'flex',
    border: '1.5px solid #ccc',
    borderRadius: 11,
    height: 30,
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  button: {
    borderRadius: 0,
    flexShrink: 0,
    fontSize: 12,
    width: 90,
    lineHeight: '21px',
    letterSpacing: -0.08,
    color: '#000',
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: darken('#ccc', 0.1),
    },
  },
  label: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'flex-end',
    whiteSpace: 'pre',
    overflow: 'hidden',
  },

  text: {
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
}))
const Color = ({ onDownload, size, name }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button size="small" onClick={onDownload} className={classes.button}>
        دانلود فایل
      </Button>
      <div className={classes.label}>
        <Typography className={classes.text}>{`${size} | `}</Typography>
        <Typography
          noWrap
          className={classes.text}
          style={{ direction: getDirection(name[0]) }}
        >
          {name}
        </Typography>
      </div>
    </div>
  )
}

Color.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Color
