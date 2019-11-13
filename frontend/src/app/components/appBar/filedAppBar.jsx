import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { cns, ab } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    backgroundColor: '#f0f0f0',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    height: '100%',
    borderRadius: 0,
    '--icon-background': '#5adbdf',
    '&:disabled': {
      '--icon-background': '#ccc',
    },
  },
  typography: {
    fontWeight: 'Bold',
    lineHeight: '21px',
    letterSpacing: -0.08,
    color: '#000',
  },
  close: {
    width: 12,
    height: 12,
  },
  fieldButton: {
    width: 40,
    minWidth: 40,
  },
  arrowButton: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  icon: {
    display: 'inline-flex',
    backgroundColor: 'var(--icon-background)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: 20,
    height: 20,
  },
  textRight: {
    marginRight: 4,
  },
  textLeft: {
    marginLeft: 4,
  },

  arrowIcon: {
    width: 7,
    height: 13,
  },
  arrowLabel: {
    fontSize: 10,
    fontWeight: 'Bold',
    letterSpacing: -0.07,
    color: '#818181',
  },
}))

const getIcons = (variant, classes) => {
  if (variant === 'field')
    return [
      <img src="/assets/svg/check.svg" alt="checkMark" />,
      <img src="/assets/svg/close.svg" alt="close" className={classes.close} />,
    ]

  if (variant === 'form')
    return [
      <div className={classes.arrowButton}>
        <div className={classes.icon}>
          <img
            src="assets/svg/left.svg"
            alt="Left"
            className={classes.arrowIcon}
          />
        </div>
        <Typography className={cns(classes.arrowLabel, classes.textLeft)}>
          بعد
        </Typography>
      </div>,
      <div className={classes.arrowButton}>
        <Typography className={cns(classes.arrowLabel, classes.textRight)}>
          قبل
        </Typography>
        <div className={classes.icon}>
          <img
            src="assets/svg/right.svg"
            alt="Right"
            className={classes.arrowIcon}
          />
        </div>
      </div>,
    ]
  if (variant === 'preview')
    return [
      '',
      <img src="/assets/svg/close.svg" alt="close" className={classes.close} />,
    ]
}

/**
 *
 * onLeft|onRight => Pass null for disabled
 */
const FiledAppBar = ({ variant, title, onLeft, onRight }) => {
  const classes = useStyles()
  const [leftIcon, rightIcon] = getIcons(variant, classes)

  return (
    <div className={classes.root}>
      <Button
        onClick={onLeft}
        disabled={!leftIcon || !onLeft}
        size="small"
        className={cns(
          classes.button,
          ab(classes.fieldButton)(variant !== 'form'),
        )}
      >
        {leftIcon}
      </Button>
      <Typography align="center" className={classes.typography}>
        {title}
      </Typography>
      <Button
        onClick={onRight}
        disabled={!rightIcon || !onRight}
        size="small"
        className={cns(
          classes.button,
          ab(classes.fieldButton)(variant !== 'form'),
        )}
      >
        {rightIcon}
      </Button>
    </div>
  )
}

FiledAppBar.propTypes = {
  variant: PropTypes.oneOf(['field', 'form', 'preview']),
  title: PropTypes.string.isRequired,
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
}
FiledAppBar.defaultProps = {
  variant: 'field',
}

export default FiledAppBar
