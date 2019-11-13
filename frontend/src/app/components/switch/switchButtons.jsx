import React from 'react'
import PropTypes from 'prop-types'
// components
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, darken } from '@material-ui/core/styles'
import { ab, cns } from '../../../helper/style/utils'
// helper

const useStyles = makeStyles(() => ({
  switch: {
    margin: '0 20px 15px',
  },
  buttonContainer: {
    borderRadius: 11,
    display: 'flex',
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#ccc',
    width: '100%',
    borderRadius: 0,
    color: '#fff',
    '&:hover': {
      backgroundColor: darken('#ccc', 0.1),
    },
  },
  gap: {
    marginRight: 3,
  },

  selected: {
    backgroundColor: '#5adbdf',
    '&:hover': {
      backgroundColor: darken('#5adbdf', 0.1),
    },
  },
  label: {
    marginBottom: 5,
  },
}))

const SwitchButtons = ({
  leftText,
  rightText,
  onLeftClick,
  onRightClick,
  selected,
  label,
}) => {
  const classes = useStyles()
  return (
    <div className={classes.switch}>
      <Typography align="right" className={classes.label}>
        {label}
      </Typography>
      <div className={classes.buttonContainer}>
        <Button
          onClick={onLeftClick}
          className={cns(
            classes.button,
            classes.gap,
            ab(classes.selected)(selected === 0),
          )}
        >
          {leftText}
        </Button>
        <Button
          onClick={onRightClick}
          className={cns(classes.button, ab(classes.selected)(selected === 1))}
        >
          {rightText}
        </Button>
      </div>
    </div>
  )
}

SwitchButtons.propTypes = {
  leftText: PropTypes.string.isRequired,
  rightText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  selected: PropTypes.number,
}
SwitchButtons.defaultProps = {
  selected: 1,
}

export default SwitchButtons
