import React from 'react'

import {stringTension} from '../math'

export default function StringSetTensions (props) {
  const {set} = props
  const {strings} = set

  const tuning = [
    329.628,
    246.942,
    195.998,
    146.832,
    110.000,
    82.4069
  ]

  const rows = strings.map(({gauge, weight}, index) => {
    return <tr key={index}>
      <td>{gauge}</td>
      <td>{stringTension(weight, 25.5, tuning[index]).toFixed(3)}</td>
    </tr>
  })

  return <table>
    <thead>
      <tr>
        <th>Gauge</th>
        <th>Tension</th>
      </tr>
    </thead>

    <tbody>{rows}</tbody>
  </table>
}
