import { describe, expect, test } from 'vitest'
import services from '../../src/services/index.js'

describe('services - saveNewPoint', async () => {
  test('Given a valid point object, it should save and return the new point record from db', () => {
    const MOCK_VALID_POINT_OBJECT = {
      name: 'mock valid object',
      x: 30,
      y: 12
    }

    const MOCK_DB_RECORD = {
      name: 'test docker',
      x_axis: 30,
      y_axis: 12,
      _id: '62d5ffdaf9f84ab42ed15c9e',
      __v: 0
    }

    const MOCKED_DB_MODULE = {
      saveNewPointOnDB: (newPoint) => MOCK_DB_RECORD
    }

    const EXPECTED_NEW_RECORD = new Promise((resolve, reject) => {
      resolve([{ ...MOCK_DB_RECORD }, null])
    })

    expect(services.saveNewPoint({
      newPointObject: MOCK_VALID_POINT_OBJECT,
      db: MOCKED_DB_MODULE
    })).toEqual(EXPECTED_NEW_RECORD)
  })
})
