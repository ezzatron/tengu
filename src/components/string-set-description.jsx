import React from 'react'

export default function StringSetDescription (props) {
  const {set} = props
  const {brand, range, strings} = set

  const lightestString = strings[0]
  const heaviestString = strings[strings.length - 1]

  return <span>{brand.name} {range} {lightestString.gauge}-{heaviestString.gauge} ({set.model})</span>
}
