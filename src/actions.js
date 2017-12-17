export const SET_WEIGHT = 'SET_WEIGHT'
export const SET_LENGTH = 'SET_LENGTH'
export const SET_FREQUENCY = 'SET_FREQUENCY'

export function setWeight (value) {
  return {type: SET_WEIGHT, payload: value}
}

export function setLength (value) {
  return {type: SET_LENGTH, payload: value}
}

export function setFrequency (value) {
  return {type: SET_FREQUENCY, payload: value}
}
