import React from 'react'
import PropTypes from 'prop-types'
// components
import Input from '@material-ui/core/Input'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  inputContainer: {
    border: '1.5px solid #818181',
    borderRadius: 11,
    height: 35,
  },
  singleLineInput: {
    margin: '0 20px 15px',
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
  label: {
    marginBottom: 5,
    lineHeight: '21px',
    direction: 'rtl',
  },
}))

const SingleLineInput = ({ label, placeholder, onChange, type, value }) => {
  const classes = useStyles()
  return (
    <div className={classes.singleLineInput}>
      <label>
        <Typography align="right" className={classes.label}>
          {label}
        </Typography>
        <Input
          type={type}
          disableUnderline
          onChange={onChange}
          className={classes.inputContainer}
          classes={{ input: classes.input }}
          inputProps={{ dir: 'auto' }}
          fullWidth
          placeholder={placeholder}
          value={value}
        />
      </label>
    </div>
  )
}

SingleLineInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
}
SingleLineInput.defaultProps = {
  type: 'text',
}

export default SingleLineInput
