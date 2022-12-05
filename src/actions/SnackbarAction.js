import React from 'react'
import FailedAlert from '../components/Alert/FailedAlert'

export function setErrorSnackbarMessageAndOpen(message, open) {
  return (
    <FailedAlert message={message} open={open}>
      
    </FailedAlert>
  )
}
