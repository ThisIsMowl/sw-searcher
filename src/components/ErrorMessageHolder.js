import React from 'react'
import { connect } from 'react-redux'

import ErrorMessage from './ErrorMessage'
import commonActions from '../actions/commonActions'

const mapDispatch = dispatch => ({
  clearError: () =>
    dispatch(commonActions.clearAll()),
}) 

class ErrorMessageHolder extends React.Component {
  constructor() {
    super()
    this.clearAll = () => this.props.clearError()
  }

  render() {
    const { error } = this.props
    if (error) {
      return (
        <div className="text-center">
          <h5>Error</h5>
          <ErrorMessage error={error} />
          <button type="button" className="d-sm-none btn btn-sm btn-danger" onClick={this.clearAll}>Try Again</button>
          <button type="button" className="d-none d-md-block btn btn-danger" onClick={this.clearAll}>Try Again</button>
        </div>
      )
    }
    return null
  }
}

export default connect(() => ({}), mapDispatch)(ErrorMessageHolder)
