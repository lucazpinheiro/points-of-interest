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

  describe('db functions', () => {
    describe('getPointsFromDB', () => {
      const MOCKED_POINTS_ON_DB = [
        {
          __id: 1,
          name: 'a',
          x_axis: 30,
          y_axis: 12
        },
        {
          __id: 2,
          name: 'b',
          x_axis: 12,
          y_axis: 19
        },
        {
          __id: 3,
          name: 'c',
          x_axis: 6,
          y_axis: 11
        }
      ]

      test('Given a empty query object, it should return all points from db', async () => {
        const MOCKED_MODEL = {
          find () {
            return MOCKED_POINTS_ON_DB
          }
        }
        const MOCKED_EMPTY_QUERY = {}
        const EXPECTED_RETURN = [
          {
            name: 'a',
            x: 30,
            y: 12
          },
          {
            name: 'b',
            x: 12,
            y: 19
          },
          {
            name: 'c',
            x: 6,
            y: 11
          }
        ]

        const [actualValue, errors] = await db.getPointsFromDB(MOCKED_MODEL, MOCKED_EMPTY_QUERY)
        expect(actualValue).toEqual(EXPECTED_RETURN)
        expect(errors).toBe(null)
      })

      test('Given a query object, it should return only a subset of points from db', async () => {
        const MOCKED_MODEL = {
          find () {
            return MOCKED_POINTS_ON_DB
          }
        }
        const MOCKED_QUERY = {
          d: 10,
          x: 28,
          y: 9
        }
        const EXPECTED_RETURN = [
          {
            name: 'a',
            x: 30,
            y: 12
          }
        ]

        const [actualValue, errors] = await db.getPointsFromDB(MOCKED_MODEL, MOCKED_QUERY)
        expect(actualValue).toEqual(EXPECTED_RETURN)
        expect(errors).toBe(null)
      })

      test('Given an error been thrown during db communication, it should return a error', async () => {
        const MOCKED_MODEL = {
          find () {
            throw new Error('mocked error')
          }
        }
        const MOCKED_QUERY = {}
        const EXPECTED_RETURNED_ERROR = new Error('mocked error')

        const [actualValue, errors] = await db.getPointsFromDB(MOCKED_MODEL, MOCKED_QUERY)
        expect(actualValue).toEqual(null)
        expect(errors).toEqual(EXPECTED_RETURNED_ERROR)
      })
    })

    describe('savePointsToDB', () => {
      test('Given a new point payload, should save the point on DB', async () => {
        const MOCKED_NEW_RECORD = {
          __id: 1,
          name: 'a',
          x_axis: 5,
          y_aix: 5
        }
        const MOCKED_MODEL = {
          create (payload) {
            return MOCKED_NEW_RECORD
          }
        }
        const MOCKED_PAYLOAD = {
          name: 'a',
          x: 5,
          y: 5
        }

        const [actualValue, errors] = await db.saveNewPointToDB(MOCKED_MODEL, MOCKED_PAYLOAD)
        expect(actualValue).toEqual(MOCKED_NEW_RECORD)
        expect(errors).toBe(null)
      })

      test('Given an error been thrown during db communication, it should return a error', async () => {
        const EXPECTED_RETURNED_ERROR = new Error('mocked error')

        const MOCKED_MODEL = {
          create (payload) {
            throw new Error('mocked error')
          }
        }
        const MOCKED_PAYLOAD = {
          name: 'a',
          x: 5,
          y: 5
        }

        const [actualValue, errors] = await db.saveNewPointToDB(MOCKED_MODEL, MOCKED_PAYLOAD)
        expect(actualValue).toBe(null)
        expect(errors).toEqual(EXPECTED_RETURNED_ERROR)
      })
    })
  })
})
