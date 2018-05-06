import {Record} from 'immutable'

import {noteToSemitones} from './math'
import {TYPE_STEEL, TYPE_NICKEL_ROUND_WOUND} from './data/strings'

const StringSpec = Record({
  tuning: '',
  type: '',
  gauge: '',
}, 'StringSpec')

const AppState = Record({
  strings: [
    new StringSpec({tuning: noteToSemitones('E2'), type: TYPE_NICKEL_ROUND_WOUND, gauge: '.046'}),
    new StringSpec({tuning: noteToSemitones('A2'), type: TYPE_NICKEL_ROUND_WOUND, gauge: '.036'}),
    new StringSpec({tuning: noteToSemitones('D3'), type: TYPE_NICKEL_ROUND_WOUND, gauge: '.026'}),
    new StringSpec({tuning: noteToSemitones('G3'), type: TYPE_STEEL, gauge: '.017'}),
    new StringSpec({tuning: noteToSemitones('B3'), type: TYPE_STEEL, gauge: '.013'}),
    new StringSpec({tuning: noteToSemitones('E4'), type: TYPE_STEEL, gauge: '.010'}),
  ],
}, 'AppState')

const init = new AppState()

export default function reducer (state = init, {type, payload}) {
  switch (type) {
  }

  return state
}

export function getStrings (state) {
  return state.strings
}
