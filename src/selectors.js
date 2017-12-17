import * as stringSets from './data/sets'

export function getStringSet (state) {
  return stringSets[state.stringSet] || null
}
