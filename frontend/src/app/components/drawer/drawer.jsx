import React from 'react'
import PropTypes from 'prop-types'
// components
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import DrawerItem from './drawerItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  list: {
    width: 117,
  },
}))

const Drawer = ({ open, onClose, onOpen, onItemClick }) => {
  const classes = useStyles()
  const DrawerList = React.useMemo(
    () => (
      <List className={classes.list}>
        {[
          'singleLineInput',
          'multiLineInput',
          'colorPicker',
          'fileUpload',
          'dropDownMenu',
          'ratioButton',
          'checkBox',
          'text',
          'image',
          'header',
          'divider',
        ].map(type => (
          <DrawerItem key={type} type={type} onClick={onItemClick} />
        ))}
      </List>
    ),
    [onItemClick],
  )
  return (
    <SwipeableDrawer
      disablePortal
      elevation={2}
      anchor="right"
      disableBackdropTransition
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      transitionDuration={300}
      ModalProps={{
        keepMounted: true,
        BackdropProps: {
          invisible: true,
        },
        style: {
          top: 50,
        },
      }}
      PaperProps={{
        style: {
          position: 'absolute',
        },
      }}
    >
      {DrawerList}
    </SwipeableDrawer>
  )
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default Drawer
