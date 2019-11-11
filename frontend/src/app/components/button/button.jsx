// modules
import React from 'react'
import PropTypes from 'prop-types'
// component
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles, darken } from '@material-ui/core/styles'
//helper
import { cns } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  button: {
    flex: '1 1 100px',
    width: '100%',
    height: 35,
    borderRadius: 11,
    color: '#fff',
    letterSpacing: -0.08,
    marginRight: 10,
    '&:last-of-type': {
      marginRight: 0,
    },
  },
  iconButton: {
    padding: 0,
    flex: '1 0 115px',
    width: '100%',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& > span': {
      height: 35,
      display: 'flex',
    },
  },
  iconButtonText: {
    fontSize: 11,
    height: '100%',
    width: '100%',
    lineHeight: '35px',
    flex: '1 1 77px',
  },
  iconButtonImgContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    flex: '0 0 35px',
  },

  // color
  blue: {
    '--backgroundColor': '#4fc4f4',
    '&:hover': {
      '--backgroundColor': darken('#4fc4f4', 0.1),
    },
  },
  gray: {
    '--backgroundColor': '#818181',
    '&:hover': {
      '--backgroundColor': darken('#818181', 0.1),
    },
  },
  yellow: {
    '--backgroundColor': '#f2cb00',
    '&:hover': {
      '--backgroundColor': darken('#f2cb00', 0.1),
    },
  },
  green: {
    '--backgroundColor': '#68D200',
    '&:hover': {
      '--backgroundColor': darken('#68D200', 0.1),
    },
  },
  bgc: {
    backgroundColor: 'var(--backgroundColor)',
    '&:hover': {
      backgroundColor: 'var(--backgroundColor)',
    },
  },
}))

const FormButton = ({ color, text, variant, onClick }) => {
  const classes = useStyles()
  if (variant === 'plus')
    return (
      <Button
        onClick={onClick}
        className={cns(classes.button, classes.iconButton, classes[color])}
      >
        <Typography className={cns(classes.bgc, classes.iconButtonText)}>
          {text}
        </Typography>
        <div className={cns(classes.bgc, classes.iconButtonImgContainer)}>
          <img src="assets/svg/plus.svg" alt="plus" />
        </div>
      </Button>
    )

  return (
    <Button
      onClick={onClick}
      className={cns(classes.button, classes[color], classes.bgc)}
    >
      {text}
    </Button>
  )
}

FormButton.propTypes = {
  color: PropTypes.oneOf(['blue', 'gray', 'green', 'yellow']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['plus', 'normal']),
}
FormButton.defaultProps = {
  color: 'blue',
  variant: 'normal',
}

export default FormButton
