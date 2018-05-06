import {sets, strings} from './data/strings'

export function getStringSet (state) {
  return sets[state.stringSet] || null
}

export function getString (string) {
  return strings[string] || null
}
