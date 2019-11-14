import React from 'react'
import PropTypes from 'prop-types'
import { List, ListItem, Button, Typography } from '@material-ui/core'
import { makeStyles, darken } from '@material-ui/core/styles'
import { cns, ab } from '../../../helper/style/utils'

const useStyles = makeStyles(() => ({
  root: {
    margin: '0px 20px 16px',
  },
  typography: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    marginBottom: 5,
  },
  text: {
    width: '100%',
    direction: 'rtl',
    fontSize: 10,
    lineHeight: '17px',
    letterSpacing: -0.08,
  },
  list: {
    paddingTop: 0,
  },
  listItem: {
    '&:first-child': {
      paddingTop: 0,
    },
    padding: '5px 0',
  },
  checkbox: {
    marginLeft: 7,
    minWidth: 20,
    width: 20,
    height: 20,
    padding: 0,
    border: 'none',
    transition: 'none',
    borderRadius: 5,
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: darken('#ccc', 0.1),
    },
  },
  selected: {
    backgroundColor: '#4fc4f4',
    '&:hover': {
      backgroundColor: darken('#4fc4f4', 0.1),
    },
  },
  checkMark: {
    width: 12,
    height: 9,
  },
}))

const MultiSelect = ({ label, options, onClick }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography align="right" className={classes.typography}>
        {label}
      </Typography>
      <List className={classes.list}>
        {options.map(({ text, selected, id }) => (
          <ListItem key={id} className={classes.listItem}>
            <Typography align="right" noWrap className={classes.text}>
              {text}
            </Typography>
            <Button
              className={cns(classes.checkbox, ab(classes.selected)(selected))}
              onClick={({ target: { checked } }) => onClick(id, checked)}
              classes={{ root: classes.color, checked: classes.checked }}
            >
              {selected ? (
                <img
                  src="assets/svg/checkMark.svg"
                  alt="check"
                  className={classes.checkMark}
                />
              ) : (
                ''
              )}
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

MultiSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string,
      selected: PropTypes.bool,
      id: PropTypes.string,
    }),
  ),
  onClick: PropTypes.func.isRequired,
}

export default MultiSelect
