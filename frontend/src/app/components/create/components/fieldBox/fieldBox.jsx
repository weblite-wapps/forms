import React from 'react'
import PropTypes from 'prop-types'
// components
import Defaults from './defaults'
import Divider from './divider'
import Cover from './cover'

/** Router for Component selection sort by UseCases */
const FieldBox = ({ mode, ...other }) => {
  if (mode === 'COVER') return <Cover {...other} />
  if (mode === 'DIVIDER') return <Divider {...other} />
  if (mode === 'DEFAULTS') return <Defaults {...other} />
}

FieldBox.propTypes = {
  mode: PropTypes.string.isRequired,
}

export default FieldBox
