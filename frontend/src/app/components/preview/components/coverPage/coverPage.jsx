import React from 'react'
import Button from '../../../../../helper/components/button/button'

const coverPage = ({ body, mode, onStartClick, onEndClick }) => {
  // TODO add text and it's reducer and actions
  return (
    <>
      {body}
      <br />
      <Button
        text={mode === 'starting' ? 'شروع' : 'پایان'}
        onClick={mode === 'starting' ? onStartClick : onEndClick}
      />
    </>
  )
}

export default coverPage
