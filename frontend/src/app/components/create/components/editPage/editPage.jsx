import React from 'react'

// components
import SingleLineEditPage from './components/singleLine'

const EditPage = ({ field, onClose, onSubmit }) => {
  const componentMapper = {
    SingleLineInput: (
      <SingleLineEditPage field={field} onClose={onClose} onSubmit={onSubmit} />
    ),
  }

  return componentMapper[field.type]
}

export default EditPage
