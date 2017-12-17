import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {buttonPressed} from '../actions'
import {getCount} from '../selectors'

export function Counter (props) {
  const {count, buttonPressed} = props

  return <div>
    <div>You've pressed the button {count} time(s).</div>

    <button onClick={buttonPressed}>Press me</button>
  </div>
}

export default connect(
  function mapStateToProps (state) {
    return {
      count: getCount(state)
    }
  },
  function mapDispatchToProps (dispatch) {
    return bindActionCreators({buttonPressed}, dispatch)
  }
)(Counter)
