const MAGIC_CONSTANT = 386.4

export function stringTension (weight, length, frequency) {
  return (weight * ((2 * length * frequency) ** 2)) / MAGIC_CONSTANT
}

const NOTE_PATTERN = /^([ABCDEFG][b#]?)(-?\d+)$/
const DECREMENT_MAP = {
  A: 'G',
  B: 'Bb',
  Bb: 'A',
  C: 'B',
  D: 'Db',
  Db: 'C',
  E: 'Eb',
  Eb: 'D',
  F: 'E',
  G: 'Gb',
  Gb: 'F',
}

export function decrementNote (note) {
  const match = NOTE_PATTERN.exec(note)

  if (!match) throw new Error('Invalid note.')

  const [, name, octave] = match
  const newOctave = name === 'C' ? octave - 1 : octave

  return `${DECREMENT_MAP[name]}${newOctave}`
}
