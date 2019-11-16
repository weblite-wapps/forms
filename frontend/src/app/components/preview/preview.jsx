// modules
import React from 'react'

// components
import FormPage from './components/formPage/formPage'
import CoverPage from './components/coverPage/coverPage.container'

const Preview = ({ mode, form }) => {
  return mode === 'preview' ? (
    <FormPage form={form} />
  ) : (
    <CoverPage mode={mode} />
  )
}

export default Preview
