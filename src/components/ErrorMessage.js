import React from 'react'

const ErrorMessage = (props) => {
  switch (props.error) {
    case 404:
      return (<h5>File not found.</h5>)
    case 500:
      return (<h5>Internal server error.</h5>)
    default:
      return null
  }
}

export default ErrorMessage
