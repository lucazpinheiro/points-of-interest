import { describe, expect, test } from 'vitest'
import calculateDistanceBetweenTwoPoints from '../../src/services/calculateDistanceBetweenTwoPoints.js'

describe('services - calculateDistanceBetweenTwoPoints', () => {
  test('Given two points P (-3, -11) and Q (2, 1), their distance should be 13', () => {
    const MOCKED_POINT_P = { x: -3, y: -11 }
    const MOCKED_POINT_Q = { x: 2, y: 1 }
    const EXPECTED_DISTANCE = 13

    expect(calculateDistanceBetweenTwoPoints(MOCKED_POINT_P, MOCKED_POINT_Q))
      .toBe(EXPECTED_DISTANCE)
  })
})
