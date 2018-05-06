import pitchFq from 'pitch-fq'
import scientificNotation from 'scientific-notation'
import {expect} from 'chai'

import {stringTension, decrementNote} from '~/src/math'

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

  describe('decrementNote()', function () {
    it('should reduce the note by 1 semitone', function () {
      const data = {
        A1: 'G1',
        B1: 'Bb1',
        Bb1: 'A1',
        C2: 'B1',
        D2: 'Db2',
        Db2: 'C2',
        E2: 'Eb2',
        Eb2: 'D2',
        F1: 'E1',
        G1: 'Gb1',
        Gb1: 'F1',
      }

      Object.entries(data).forEach(([input, output]) => {
        expect(decrementNote(input)).to.equal(output)
      })
    })

    it('should throw an error for invalid input', function () {
      expect(() => decrementNote('H2')).to.throw('Invalid note.')
    })
  })
})
