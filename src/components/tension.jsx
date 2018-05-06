import React from 'react'
import {connect} from 'react-redux'

import {getStrings} from '../reducer'

import StringSetTensions from './string-set-tensions'

export function Tension (props) {
  const {strings} = props

  return <div>
    <div><StringSetTensions strings={strings} /></div>
  </div>
}

export default connect(
  function mapStateToProps (state) {
    return {
      strings: getStrings(state),
    }
  }
)(Tension)
