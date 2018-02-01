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
    this.clearAll = () => this.props.clearAll()
  }

  render() {
    const { error } = this.props
    if (error) {
      return (
        <div className="text-center">
          <h4>Error</h4>
          <ErrorMessage error={error} />
          <button type="button" onClick={this.clearAll}>Clear Error</button>
        </div>
      )
    }
    return null
  }
}

export default connect(() => ({}), mapDispatch)(ErrorMessageHolder)
