import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {bindInputChange} from '../dom'
import {stringTension} from '../math'
import {setWeight, setLength, setFrequency} from '../actions'
import {getWeight, getLength, getFrequency} from '../selectors'

export function Tension (props) {
  const {weight, length, frequency, setWeight, setLength, setFrequency} = props
  const tension = stringTension(weight, length, frequency).toFixed(1)

  return <div>
    <div>
      <label htmlFor='weight'>Weight:</label>
      <input name='weight' value={weight} onChange={bindInputChange(setWeight)} />
    </div>

    <div>
      <label htmlFor='length'>Length:</label>
      <input name='length' value={length} onChange={bindInputChange(setLength)} />
    </div>

    <div>
      <label htmlFor='frequency'>Frequency:</label>
      <input name='frequency' value={frequency} onChange={bindInputChange(setFrequency)} />
    </div>

    <div>Tension is: <strong>{tension}</strong></div>
  </div>
}

export default connect(
  function mapStateToProps (state) {
    return {
      weight: getWeight(state),
      length: getLength(state),
      frequency: getFrequency(state)
    }
  },
  function mapDispatchToProps (dispatch) {
    return bindActionCreators({setWeight, setLength, setFrequency}, dispatch)
  }
)(Tension)
