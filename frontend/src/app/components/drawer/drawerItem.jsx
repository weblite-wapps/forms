import React from 'react'
import PropTypes from 'prop-types'
// components
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
// helper
import { makeStyles, darken } from '@material-ui/core/styles'
import getData from './getData'

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: 'transparent',
    '--backgroundColor': '#f0f0f0',
    '&:hover': {
      backgroundColor: 'transparent',
      '--backgroundColor': darken('#f0f0f0', 0.1),
    },
  },
  fieldContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  logoContainer: {
    width: 80,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: 'var(--backgroundColor, #f0f0f0)',
  },
  text: {
    color: '#818181',
    lineHeight: '21px',
    letterSpacing: -0.08,
    marginTop: 1,
  },
  listItem: {
    justifyContent: 'center',
    padding: '20px 8px 0',
    '&:last-of-type': {
      paddingBottom: 20,
    },
  },
}))

const DrawerItem = ({ type, onClick }) => {
  const [logo, name] = getData(type)
  const classes = useStyles()
  return (
    <ListItem className={classes.listItem}>
      <Button
        size="small"
        className={classes.button}
        onClick={() => onClick(type)}
      >
        <div className={classes.fieldContainer}>
          <div className={classes.logoContainer}>
            <img src={`assets/svg/types/${logo}.svg`} alt={name} />
          </div>
          <Typography align="center" className={classes.text}>
            {name}
          </Typography>
        </div>
      </Button>
    </ListItem>
  )
}

DrawerItem.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default DrawerItem
