import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {strings, TYPE_STEEL, TYPE_NICKEL_ROUND_WOUND} from '../data/strings'
import {semitonesToFrequency, semitonesToNote, stringTension} from '../math'
import {decrementStringTuning} from '../reducer'

export function StringTension (props) {
  const {string, decrementStringTuning} = props
  const {tuning, type, gauge} = string
  const weight = strings[type][gauge]
  const frequency = semitonesToFrequency(tuning)

  return <tr>
    <td><button onClick={decrementStringTuning}>-</button> {semitonesToNote(tuning)}</td>
    <td>{gauge}</td>
    <td>{stringTypeLabel(type)}</td>
    <td>{stringTension(weight, 25.5, frequency).toFixed(3)}</td>
  </tr>
}

export default connect(
  null,
  function mapDispatchToProps (dispatch, props) {
    const {index} = props

    return bindActionCreators({
      decrementStringTuning: decrementStringTuning.bind(null, index),
    }, dispatch)
  }
)(StringTension)

function stringTypeLabel (type) {
  switch (type) {
    case TYPE_STEEL: return 'Plain steel'
    case TYPE_NICKEL_ROUND_WOUND: return 'Nickel wound'
  }

  return '???'
}
