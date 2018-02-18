import pitchFq from 'pitch-fq'
import React from 'react'
import scientificNotation from 'scientific-notation'

import {E_STANDARD as tuning} from '../data/tunings'
import {stringTension} from '../math'

export default function StringSetTensions (props) {
  const {set} = props
  const {strings} = set

  const rows = strings.map(({gauge, weight}, index) => {
    const frequency = pitchFq(scientificNotation(tuning[index]))
    const stringTuning = tuning[index]

    return <tr key={stringTuning}>
      <td>{stringTuning}</td>
      <td>{gauge}</td>
      <td>{stringTension(weight, 25.5, frequency).toFixed(3)}</td>
    </tr>
  })

  return <table>
    <thead>
      <tr>
        <th>Note</th>
        <th>Gauge</th>
        <th>Tension</th>
      </tr>
    </thead>

    <tbody>{rows}</tbody>
  </table>
}
