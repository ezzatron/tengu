const MAGIC_CONSTANT = 386.4

export function stringTension (weight, length, frequency) {
  return (weight * ((2 * length * frequency) ** 2)) / MAGIC_CONSTANT
}

export function decrementNote (note) {
  return semitonesToNote(noteToSemitones(note) - 1)
}

export function incrementNote (note) {
  return semitonesToNote(noteToSemitones(note) + 1)
}

const NOTE_PATTERN = /^([ABCDEFG])(x|#|bb|b?)(-\d+|\d*)$/
const NOTE_MAP = {
  C: 0,
  D: 2,
  E: 4,
  F: 5,
  G: 7,
  A: 9,
  B: 11,
}
const ACCIDENTAL_MAP = {
  x: 2,
  '#': 1,
  '': 0,
  b: -1,
  bb: -2,
}

export function noteToSemitones (note) {
  const match = NOTE_PATTERN.exec(note)

  if (!match) throw new Error('Invalid note.')

  const [, name, accidental, octave] = match

  return NOTE_MAP[name] + ACCIDENTAL_MAP[accidental] + (octave * 12)
}

const SEMITONE_MAP = {
  0: 'C',
  1: 'Db',
  2: 'D',
  3: 'Eb',
  4: 'E',
  5: 'F',
  6: 'Gb',
  7: 'G',
  8: 'Ab',
  9: 'A',
  10: 'Bb',
  11: 'B',
}

export function semitonesToNote (semitones) {
  const octave = parseInt(semitones / 12)
  const remainder = semitones % 12

  return SEMITONE_MAP[remainder] + octave
}
