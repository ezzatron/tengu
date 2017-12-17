import {Record} from 'immutable'

import * as actions from './actions'

const AppState = Record({
  stringSet: 'DADDARIO_EXL110'
})

const init = new AppState()

export default function reducer (state = init, {type, payload}) {
  switch (type) {
    case actions.SET_STRING_SET:
      return state.set('stringSet', payload)
  }

  return state
}
