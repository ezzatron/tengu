import {Map} from 'immutable'

import * as actions from './actions'

const init = Map({
  weight: .00032279,
  length: 25.5,
  frequency: 82.4
})

export default function reducer (state = init, {type, payload}) {
  switch (type) {
    case actions.SET_WEIGHT:
      return state.set('weight', payload)

    case actions.SET_LENGTH:
      return state.set('length', payload)

    case actions.SET_FREQUENCY:
      return state.set('frequency', payload)
  }

  return state
}
