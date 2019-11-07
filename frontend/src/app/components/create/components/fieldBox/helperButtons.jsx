import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const HelperButtons = ({ onEdit, onDelete, onDuplicate }) => {
  return (
    <Fragment>
      <IconButton size="small">
        <img src="assets/svg/edit.svg" alt="edit" />
      </IconButton>
      <IconButton size="small">
        <img src="assets/svg/edit.svg" alt="edit" />
      </IconButton>
      <IconButton size="small">
        <img src="assets/svg/edit.svg" alt="edit" />
      </IconButton>
    </Fragment>
  )
}

HelperButtons.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  onDuplicate: PropTypes.func,
}

HelperButtons.defaultProps = {
  onEdit: null,
  onDelete: null,
  onDuplicate: null,
}

export default HelperButtons
