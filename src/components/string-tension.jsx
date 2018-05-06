import pitchFq from 'pitch-fq'
import React from 'react'
import scientificNotation from 'scientific-notation'

import {strings} from '../data/strings'
import {stringTension} from '../math'

export default function StringTension (props) {
  const {string, tuning} = props
  const {gauge, weight} = strings[string]
  const frequency = pitchFq(scientificNotation(tuning))

  return <tr>
    <td>{tuning}</td>
    <td>{gauge}</td>
    <td>{stringTension(weight, 25.5, frequency).toFixed(3)}</td>
  </tr>
}
