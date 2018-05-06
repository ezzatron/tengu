import React from 'react'

import {E_STANDARD as tuning} from '../data/tunings'

import StringTension from './string-tension'

export default function StringSetTensions (props) {
  const {set} = props
  const {strings} = set
  let stringIndex = 0

  const rows = strings.map((string, index) => {
    return <StringTension key={stringIndex++} string={string} tuning={tuning[index]} />
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
