import { describe, expect, test } from 'vitest'
import { objectIsEmpty } from '../../src/utils/index.js'

describe('utils - objectIsEmpty', () => {
  test('Given a empty object, it should return \'true\'', () => {
    const MOCKED_OBJECT = {}

    const EXPECTED_VALUE = true

    expect(objectIsEmpty(MOCKED_OBJECT)).toBe(EXPECTED_VALUE)
  })

  test('Given a object with some properties, it should return \'false\'', () => {
    const MOCKED_OBJECT = { someKey: 'this object is not empty' }

    const EXPECTED_VALUE = false

    expect(objectIsEmpty(MOCKED_OBJECT)).toBe(EXPECTED_VALUE)
  })
})
