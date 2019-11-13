import React from 'react'
import PropTypes from 'prop-types'
// component
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles, darken } from '@material-ui/core/styles'
//helper
import { cns, ab } from '../../../helper/style/utils'

const useStyles = makeStyles(theme => ({
  user: {
    display: 'flex',
    margin: '0 20px 16px',
    borderRadius: 11,
    overflow: 'hidden',
    height: 50,
  },
  body: {
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: '#f0f0f0',
  },
  texts: {
    marginRight: 12,

    flex: 1,
  },
  name: {
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.06,
  },
  date: {
    fontSize: 8,
    lineHeight: '13px',
    fontWeight: 'Bold',
    letterSpacing: -0.06,
    color: '#818181',
  },
  avatarContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '0 50px',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    marginLeft: 4,
  },
  avatar: {
    width: 35,
    height: 35,
  },
  deleteButton: {
    marginLeft: 11,
    width: 30,
    height: 30,
    minHeight: 30,
    backgroundColor: '#ccc',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#E6494F',
    },
  },
}))

const User = ({ name, onDelete, avatarSrc, date }) => {
  const classes = useStyles()
  return (
    <div className={classes.user}>
      <div className={classes.body}>
        <Fab size="small" className={classes.deleteButton} onClick={onDelete}>
          <img src="assets/svg/trash.svg" alt="trash" />
        </Fab>
        <div className={classes.texts}>
          <Typography align="right" className={classes.name}>
            {name}
          </Typography>
          <Typography align="right" className={classes.date}>
            {date}
          </Typography>
        </div>
      </div>
      <div className={classes.avatarContainer}>
        {avatarSrc ? (
          <Avatar alt="name" src={avatarSrc} className={classes.avatar} />
        ) : (
          <Avatar
            alt="name"
            className={classes.avatar}
            style={{
              backgroundColor:
                '#' + (((1 << 24) * Math.random()) | 0).toString(16),
            }}
          >
            <img draggable={false} src="assets/svg/profile.svg" alt="profile" />
          </Avatar>
        )}
      </div>
    </div>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  avatarSrc: PropTypes.string,
  date: PropTypes.string.isRequired,
}
User.defaultProps = {
  avatarSrc: null,
}

export default User
