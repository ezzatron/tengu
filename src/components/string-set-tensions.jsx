import React from 'react'

import {stringTension} from '../math'

const SEMITONE_RATIO = Math.pow(2, 1/12)

/**
 * If I knew more math, I would make this better :(
 */
function frequency (offset) {
  let f = 440

  if (offset === 0) return f

  if (offset < 0) {
    for (let i = offset; i < 0; ++i) {
      f /= SEMITONE_RATIO
    }
  } else {
    for (let i = 0; i < offset; ++i) {
      f *= SEMITONE_RATIO
    }
  }

  return f
}

export default function StringSetTensions (props) {
  const {set} = props
  const {strings} = set

  const scale = [
    25.5,
    25.5,
    25.5,
    25.5,
    25.5,
    25.5,
  ]

  const tuning = [
    frequency(-5),
    frequency(-10),
    frequency(-14),
    frequency(-19),
    frequency(-24),
    frequency(-29)
  ]

  const rows = strings.map(({gauge, weight}, index) => {
    return <tr key={index}>
      <td>{gauge}</td>
      <td>{stringTension(weight, scale[index], tuning[index]).toFixed(3)}</td>
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
