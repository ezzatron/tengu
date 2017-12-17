import {Map} from 'immutable'

import {BUTTON_PRESSED} from './actions'

const init = Map({
  count: 0
})

export default function reducer (state = init, action) {
  const {type, payload} = action

  switch (type) {
    case BUTTON_PRESSED:
      return state.set('count', state.get('count') + 1)
  }

  return state
}
