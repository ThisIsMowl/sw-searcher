import React from 'react'
import { connect } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import commonActions from '../actions/commonActions'

const mapDispatch = dispatch => ({
  clearError: () =>
    dispatch(commonActions.clearError()),
}) 

class ErrorMessageHolder extends React.Component {
  constructor() {
    super()
    this.clearError = () => this.props.clearError()
  }

  render() {
    const { error } = this.props
    if (error) {
      return (
        <div>
          <h4>Error</h4>
          <ErrorMessage error={error} />
          <button type="button" onClick={this.clearError}>Clear Error</button>
        </div>
      )
    }
    return null
  }
}

export default connect(() => ({}), mapDispatch)(ErrorMessageHolder)
