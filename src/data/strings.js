import {DADDARIO} from './brands'

export const strings = {}
export const sets = {}

export const TYPE_STEEL = 'S'
export const TYPE_NICKEL_ROUND_WOUND = 'NW'

// D'Addario ===================================================================

const DADDARIO_PL010 = 'DADDARIO_PL010'
const DADDARIO_PL013 = 'DADDARIO_PL013'
const DADDARIO_PL017 = 'DADDARIO_PL017'
const DADDARIO_NW026 = 'DADDARIO_NW026'
const DADDARIO_NW036 = 'DADDARIO_NW036'
const DADDARIO_NW046 = 'DADDARIO_NW046'

strings[DADDARIO_PL010] = {
  gauge: '.010',
  weight: 0.00002215,
  type: TYPE_STEEL,
}

strings[DADDARIO_PL013] = {
  gauge: '.013',
  weight: 0.00003744,
  type: TYPE_STEEL,
}

strings[DADDARIO_PL017] = {
  gauge: '.017',
  weight: 0.00006402,
  type: TYPE_STEEL,
}

strings[DADDARIO_NW026] = {
  gauge: '.026',
  weight: 0.00012671,
  type: TYPE_NICKEL_ROUND_WOUND,
}

strings[DADDARIO_NW036] = {
  gauge: '.036',
  weight: 0.00023964,
  type: TYPE_NICKEL_ROUND_WOUND,
}

strings[DADDARIO_NW046] = {
  gauge: '.046',
  weight: 0.00038216,
  type: TYPE_NICKEL_ROUND_WOUND,
}

// D'Addario (sets) ------------------------------------------------------------

const DADDARIO_EXL110 = 'DADDARIO_EXL110'

sets[DADDARIO_EXL110] = {
  range: 'XL Nickel Round Wound',
  designation: 'Regular Light',
  model: 'EXL110',
  brand: DADDARIO,
  strings: [
    DADDARIO_NW046,
    DADDARIO_NW036,
    DADDARIO_NW026,
    DADDARIO_PL017,
    DADDARIO_PL013,
    DADDARIO_PL010,
  ],
}
