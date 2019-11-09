// modules
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import FieldBox from './components/fieldBox'

const Create = () => (
  <div>
    <FieldBox mode="DEFAULTS" />
    <FieldBox mode="DIVIDER" />
    <FieldBox mode="COVER" />
  </div>
)

export default Create
