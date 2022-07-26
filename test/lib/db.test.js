import { describe, expect, test } from 'vitest'
import db, {
  presentationMapper,
  getDistanceBetweenPoints,
  filterPointsByDistance
} from '../../src/lib/db.js'

describe('lib - db', () => {
  describe('helper functions', () => {
    describe('presentationMapper', () => {
      test(`Given a query object without a d property, it should return a error
      for this property`, () => {
        const MOCKED_POINTS_ARRAY = [{
          name: 'test point',
          x_axis: 10,
          y_axis: 12
        }]
        const EXPECTED_ERROR_PROPERTY = [{
          name: 'test point',
          x: 10,
          y: 12
        }]

        expect(presentationMapper(MOCKED_POINTS_ARRAY))
          .toEqual(EXPECTED_ERROR_PROPERTY)
      })
    })

    describe('getDistanceBetweenPoints', () => {
      test('Given a point P (9,3) and a point Q (7,2), their distance should be 7', () => {
        const MOCKED_P_POINT = {
          x_axis: 9,
          y_axis: 7
        }
        const MOCKED_Q_POINT = {
          x_axis: 3,
          y_axis: 2
        }
        const EXPECTED_DISTANCE = 7

        expect(getDistanceBetweenPoints(MOCKED_P_POINT, MOCKED_Q_POINT))
          .toBe(EXPECTED_DISTANCE)
      })
    })

    describe('filterPointsByDistance', () => {
      test('Given a point P (9,3) and a point Q (7,2), their distance should be 7', () => {
        const MOCKED_POINTS_ARRAY = [
          {
            name: 'a',
            x_axis: 30,
            y_axis: 12
          },
          {
            name: 'b',
            x_axis: 12,
            y_axis: 19
          },
          {
            name: 'c',
            x_axis: 6,
            y_axis: 11
          }
        ]
        const MOCKED_REFERENCE_POINT = {
          x_axis: 28,
          y_axis: 9
        }
        const MAX_DISTANCE = 10

        const EXPECTED_FILTERED_POINTS = [{
          name: 'a',
          x_axis: 30,
          y_axis: 12
        }]

        expect(filterPointsByDistance(MOCKED_POINTS_ARRAY, MAX_DISTANCE, MOCKED_REFERENCE_POINT))
          .toEqual(EXPECTED_FILTERED_POINTS)
      })
    })
  })

  describe.skip('db functions', () => {
    describe('getPointsFromDB', () => {
      test('Given a empty query object, it should return all points from db', () => {

      })
    })
  })
})
