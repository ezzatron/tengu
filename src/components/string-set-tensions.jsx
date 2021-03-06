import React from 'react'

import StringTension from './string-tension'

export default function StringSetTensions (props) {
  const {strings} = props
  let stringIndex = 0

  const rows = strings.map(string => {
    const index = stringIndex++

    return <StringTension key={index} string={string} index={index} />
  })

  return <table>
    <thead>
      <tr>
        <th>Note</th>
        <th>Gauge</th>
        <th>Type</th>
        <th>Tension</th>
      </tr>
    </thead>

    <tbody>{rows}</tbody>
  </table>
}
