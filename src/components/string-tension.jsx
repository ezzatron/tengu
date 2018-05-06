import pitchFq from 'pitch-fq'
import React from 'react'
import scientificNotation from 'scientific-notation'

import {strings, TYPE_STEEL, TYPE_NICKEL_ROUND_WOUND} from '../data/strings'
import {stringTension} from '../math'

export default function StringTension (props) {
  const {string} = props
  const {tuning, type, gauge} = string
  const weight = strings[type][gauge]
  const frequency = pitchFq(scientificNotation(tuning))

  console.log(strings[type])

  return <tr>
    <td>{tuning}</td>
    <td>{gauge}</td>
    <td>{stringTypeLabel(type)}</td>
    <td>{stringTension(weight, 25.5, frequency).toFixed(3)}</td>
  </tr>
}

function stringTypeLabel (type) {
  switch (type) {
    case TYPE_STEEL: return 'Plain steel'
    case TYPE_NICKEL_ROUND_WOUND: return 'Nickel wound'
  }

  return '???'
}
