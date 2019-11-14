import React from 'react'
import PropTypes from 'prop-types'
import { Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { cns } from '../../../helper/style/utils'
import './color.scss'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0px 20px 16px',
  },
  palette: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  colorBox: {
    minWidth: 35,
    height: 35,
    width: 35,
    borderRadius: 5,
    marginRight: 7,
    '&:last-child': {
      marginRight: 0,
    },
  },
  dynamicColor: {
    cursor: 'pointer',
    overflow: 'hidden',
    boxSizing: 'border-box',
    padding: '17.5px',
    fontSize: 16,
    border: 'none',
    outline: 'none',
    '-webkit-tap-highlight-color': 'transparent',
  },
  typography: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    marginBottom: 5,
  },
}))

const Color = ({ backgroundColor, selected, ...other }) => (
  <Button size="small" style={{ backgroundColor }} {...other}>
    {selected ? <img src="assets/svg/checkMark.svg" alt="checked" /> : ''}
  </Button>
)

const ColorPicker = ({ colors, onClick, onChange, label, hasPicker }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography align="right" className={classes.typography}>
        {label}
      </Typography>
      <div className={classes.palette}>
        {colors.map(({ color, selected, id }) => (
          <Color
            key={id}
            backgroundColor={color}
            selected={selected}
            className={classes.colorBox}
            onClick={() => onClick(color)}
          />
        ))}
        {hasPicker && (
          // this is a Masterpiece [Enjoy :)]
          <input
            type="color"
            onChange={onChange}
            className={cns(
              classes.dynamicColor,
              classes.colorBox,
              'dynamic--color',
            )}
          />
        )}
      </div>
    </div>
  )
}

ColorPicker.propTypes = {
  // valid html colors <Length = 6>
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      selected: PropTypes.bool,
    }),
  ).isRequired,
  hasPicker: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
}
ColorPicker.defaultProps = {
  hasPicker: false,
  onChange: Function.prototype,
}

export default ColorPicker
