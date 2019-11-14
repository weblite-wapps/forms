import React from 'react'
import PropTypes from 'prop-types'
// components
import { Typography, MenuItem, Select, Input } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { cns } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0px 20px 16px',
  },
  typography: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  bottomGap: {
    marginBottom: 5,
  },
  select: {
    width: '100%',
    height: 35,
    '&:focus': {
      borderRadius: 11,
    },
  },
  menuItem: {
    textAlign: 'right',
    fontFamily: 'inherit',
    minHeight: 30,
  },
  menuText: {
    width: '100%',
  },
  paper: {
    border: '1.5px solid #818181',
    borderRadius: 11,
  },

  inputContainer: {
    border: '1.5px solid #818181',
    borderRadius: 11,
    height: 35,
    boxSizing: 'border-box',
    paddingRight: 9,
    '& ~ svg': {
      right: 'unset',
      left: 7,
    },
    '&:focus': {
      borderRadius: 11,
    },
  },
  input: {
    fontSize: 16,
    lineHeight: '21px',
    letterSpacing: -0.08,

    padding: '7px 9px',

    '&::placeholder': {
      color: '#ccc',
      opacity: 1,
      fontSize: 12,
      direction: 'rtl',
      textAlign: 'right',
    },
  },
}))

const Image = ({ label, items, onChange, placeholder }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography
        align="right"
        className={cns(classes.typography, classes.bottomGap)}
      >
        {label}
      </Typography>
      <div>
        <Select
          className={classes.select}
          MenuProps={{
            elevation: 0,
            transformOrigin: { vertical: 'top', horizontal: 'center' },
            disablePortal: true,
            PaperProps: {
              className: classes.paper,
            },
          }}
          onChange={onChange}
          inputProps={{
            className: classes.inputContainer,
          }}
          input={
            <Input
              disableUnderline
              fullWidth
              classes={{ input: classes.input }}
            />
          }
        >
          {
            <MenuItem disabled value="" className={classes.menuItem}>
              <Typography
                align="right"
                className={cns(classes.typography, classes.menuText)}
              >
                {placeholder}
              </Typography>
            </MenuItem>
          }
          {items.map(({ text, id }) => (
            <MenuItem key={id} value={text} className={classes.menuItem}>
              <Typography
                align="right"
                className={cns(classes.typography, classes.menuText)}
              >
                {text}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
}
Image.defaultProps = {
  alt: 'Preview',
}

export default Image
