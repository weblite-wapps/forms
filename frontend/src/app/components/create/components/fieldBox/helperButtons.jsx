import PropTypes from 'prop-types'
import React from 'react'
// style
import { makeStyles } from '@material-ui/core/styles'
// components
import IconButton from '@material-ui/core/IconButton'
// helper
import { cns } from '../../../../../helper/style/utils'
// CSS
const useStyles = makeStyles(() => ({
  button: {
    flex: '0 0 35px',
    borderRight: '1px solid #ccc',
  },
  square: {
    borderRadius: 0,
  },
}))

const HelperButtons = ({ onEdit, onDelete, onDuplicate }) => {
  const classes = useStyles()
  return (
    <>
      {onEdit !== null && (
        <IconButton
          onClick={onEdit}
          className={cns(classes.button, classes.square)}
          size="small"
        >
          <img src="assets/svg/edit.svg" alt="edit" />
        </IconButton>
      )}

      {onDelete !== null && (
        <IconButton
          onClick={onDelete}
          className={cns(classes.button, classes.square)}
          size="small"
        >
          <img src="assets/svg/close.svg" alt="delete" />
        </IconButton>
      )}

      {onDuplicate !== null && (
        <IconButton
          onClick={onDuplicate}
          className={cns(classes.button, classes.square)}
          size="small"
        >
          <img src="assets/svg/duplicate.svg" alt="duplicate" />
        </IconButton>
      )}
    </>
  )
}

HelperButtons.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDuplicate: PropTypes.func,
}
HelperButtons.propTypes = {
  onEdit: Function.prototype,
  onDelete: Function.prototype,
  onDuplicate: Function.prototype,
}

export default HelperButtons
