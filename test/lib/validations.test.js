import { describe, expect, test } from 'vitest'
import validations from '../../src/lib/validations.js'

describe('lib - validations', () => {
  describe('validateQueryParameters', () => {
    test(`Given a query object without a d property, it should return a error
    for this property`, () => {
      const MOCKED_QUERY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { d: 'd is required' }

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a query object without a d property less than 0, it should return a error
    for this property`, () => {
      const MOCKED_QUERY_OBJECT = { d: -1 }
      const EXPECTED_ERROR_PROPERTY = { d: 'd must be equal or greater than 0' }

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a query object without a x property, it should return a error
    for this property`, () => {
      const MOCKED_QUERY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { x: 'x is required' }

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a query object without a y property, it should return a error
    for this property`, () => {
      const MOCKED_QUERY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { y: 'y is required' }

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a query object without a d property less than 0, it should return a error
    for this property`, () => {
      const MOCKED_QUERY_OBJECT = { x: -110, y: 230 }
      const EXPECTED_ERROR_PROPERTY = {
        x: 'x must be between -100 and 100',
        y: 'y must be between -100 and 100'
      }

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a query object without errors, it should return a array with
    two values, true for 'ok' and null for errors`, () => {
      const MOCKED_QUERY_OBJECT = { d: 10, x: 10, y: 2 }
      const EXPECTED_ARRAY = [true, null]

      expect(validations.validateQueryParameters(MOCKED_QUERY_OBJECT))
        .toEqual(EXPECTED_ARRAY)
    })
  })

  describe('validateRequestBody', () => {
    test('Given a body object without a name property, it should return an error for this property.', () => {
      const MOCKED_BODY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { name: 'property name of type string is required' }

      expect(validations.validateRequestBody(MOCKED_BODY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test('Given a body object without a X property, it should return an error for this property.', () => {
      const MOCKED_BODY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { x: 'property x of type number is required' }

      expect(validations.validateRequestBody(MOCKED_BODY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test('Given a body object without a Y property, it should return an error for this property.', () => {
      const MOCKED_BODY_OBJECT = {}
      const EXPECTED_ERROR_PROPERTY = { y: 'property y of type number is required' }

      expect(validations.validateRequestBody(MOCKED_BODY_OBJECT)[1])
        .toMatchObject(EXPECTED_ERROR_PROPERTY)
    })

    test(`Given a body object without errors, it should return a array with
    two values, true for 'ok' and null for errors`, () => {
      const MOCKED_BODY_OBJECT = { name: 'test body', x: 10, y: 2 }
      const EXPECTED_ARRAY = [true, null]

      expect(validations.validateRequestBody(MOCKED_BODY_OBJECT))
        .toEqual(EXPECTED_ARRAY)
    })
  })
})
