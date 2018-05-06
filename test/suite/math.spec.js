import pitchFq from 'pitch-fq'
import scientificNotation from 'scientific-notation'
import {expect} from 'chai'

import {stringTension, noteToSemitones, semitonesToNote} from '~/src/math'

describe('Math functions', function () {
  describe('stringTension()', function () {
    it('should calculate the correct string tension', function () {
      [
        [0.00038216, 25.5, 'E2', 17.469300012087363],
        [0.00023964, 25.5, 'A2', 19.51856636645963],
        [0.00012671, 25.5, 'D3', 18.388987831075355],
        [0.00006402, 25.5, 'G3', 16.55468547796298],
        [0.00003744, 25.5, 'B3', 15.368368593306448],
        [0.00002215, 25.5, 'E4', 16.20033474011869],

        [0.00038216, 27, 'E2', 19.584959183101404],
        [0.00023964, 27, 'A2', 21.88240658385093],
        [0.00012671, 27, 'D3', 20.6160278798215],
        [0.00006402, 27, 'G3', 18.5595781829066],
        [0.00003744, 27, 'B3', 17.229589703222455],
        [0.00002215, 27, 'E4', 18.16231299584241],

      ].forEach(([weight, length, pitch, expected]) => {
        expect(stringTension(weight, length, pitchFq(scientificNotation(pitch)))).to.equal(expected)
      })
    })
  })

  describe('noteToSemitones()', function () {
    it('should convert scientific notation to an amount of semitones relative to C0', function () {
      const data = {
        C: 0,
        'C#': 1,
        Db: 1,
        D: 2,
        'D#': 3,
        Eb: 3,
        E: 4,
        F: 5,
        'F#': 6,
        Gb: 6,
        G: 7,
        'G#': 8,
        Ab: 8,
        A: 9,
        'A#': 10,
        Bb: 10,
        B: 11,

        B3: 47,
        C4: 48,

        'E-1': -8,
        E0: 4,
        E1: 16,
        E2: 28,

        'Eb-1': -9,
        Eb0: 3,
        Eb1: 15,
        Eb2: 27,

        Bbb: 9,
        Bx: 13,
      }

      Object.entries(data).forEach(([input, output]) => {
        expect(noteToSemitones(input), input).to.equal(output)
      })
    })
  })

  describe('semitonesToNote()', function () {
    it('should convert an amount of semitones relative to C0 into scientific notation', function () {
      const data = {
        0: 'C0',
        1: 'Db0',
        2: 'D0',
        3: 'Eb0',
        4: 'E0',
        5: 'F0',
        6: 'Gb0',
        7: 'G0',
        8: 'Ab0',
        9: 'A0',
        10: 'Bb0',
        11: 'B0',
        12: 'C1',
      }

      Object.entries(data).forEach(([input, output]) => {
        expect(semitonesToNote(input), input).to.equal(output)
      })
    })
  })
})
