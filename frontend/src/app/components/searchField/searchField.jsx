import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import { makeStyles } from '@material-ui/core/styles'
//helper
import { cns } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  searchComponent: {
    display: 'flex',
    alignItems: 'center',
    border: '1.5px solid #818181',
    borderRadius: 11,
    margin: '0 20px 15px',
    height: 35,
  },
  input: {
    fontFamily: 'inherit',
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: 16,
    letterSpacing: -0.08,
    margin: '0 9px',
    '&::placeholder': {
      textAlign: 'right',
      fontSize: 12,
      lineHeight: '21px',
      fontWeight: 500,
      color: '#ccc',
    },
  },
  searchIcon: {
    flex: 0,
    marginLeft: 11,
  },
}))

const SearchField = ({ onChange, placeholder }) => {
  const classes = useStyles()
  return (
    <div className={classes.searchComponent}>
      <img
        src="assets/svg/search.svg"
        alt="search"
        className={classes.searchIcon}
      />
      <input
        dir="auto"
        type="text"
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

SearchField.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}
SearchField.defaultProps = {
  placeholder: 'جست و جو کنید',
}

export default SearchField
