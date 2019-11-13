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
  },
  singleLineInput: {
    margin: '0 20px 15px',
  },
  input: {
    fontSize: 16,
    lineHeight: '21px',
    letterSpacing: -0.08,
    padding: '0 9px',
    '&::placeholder': {
      color: '#ccc',
      opacity: 1,
      fontSize: 12,
      direction: 'rtl',
      textAlign: 'right',
    },
    '&::webkit-scrollbar': {
      width: 2,
    },
  },
  label: {
    marginBottom: 5,
    lineHeight: '21px',
    direction: 'rtl',
  },
}))

const SingleLineInput = ({ placeholder, onChange, minLine, maxLine }) => {
  const classes = useStyles()
  return (
    <div className={classes.singleLineInput}>
      <Input
        multiline
        disableUnderline
        onChange={onChange}
        className={classes.inputContainer}
        classes={{ input: classes.input }}
        rows={minLine}
        rowsMax={maxLine}
        inputProps={{
          dir: 'auto',
          style: {
            overflow: 'auto',
          },
        }}
        fullWidth
        placeholder={placeholder}
      />
    </div>
  )
}

SingleLineInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  minLine: PropTypes.number,
  maxLine: PropTypes.number,
}
SingleLineInput.defaultProps = {
  minLine: 3,
  maxLine: 12,
}

export default SingleLineInput
