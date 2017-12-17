import React from 'react'
import {connect} from 'react-redux'

import {getStringSet} from '../selectors'

import StringSetDescription from './string-set-description'
import StringSetTensions from './string-set-tensions'

export function Tension (props) {
  const {set} = props

  return <div>
    <div>Selected string set: <strong><StringSetDescription set={set} /></strong></div>
    <div><StringSetTensions set={set} /></div>
  </div>
}

export default connect(
  function mapStateToProps (state) {
    return {
      set: getStringSet(state)
    }
  }
)(Tension)
