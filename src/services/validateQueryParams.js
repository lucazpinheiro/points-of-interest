import { objectIsEmpty } from '../utils/index.js'

export default function validateQueryParams (query) {
  const paramErrors = {}
  if (!query.d) {
    paramErrors.d = 'd is required'
  }

  if (!query.x) {
    paramErrors.x = 'x is required'
  }

  if (!query.y) {
    paramErrors.y = 'y is required'
  }

  if (query.d < 0) {
    paramErrors.d = 'd must be greater than 0'
  }

  if (query.x < -100 || query.x > 100) {
    paramErrors.x = 'x must be between -100 and 100'
  }

  if (query.y < -100 || query.y > 100) {
    paramErrors.y = 'y must be between -100 and 100'
  }

  if (objectIsEmpty(paramErrors)) {
    return [true, null]
  }
  return [false, paramErrors]
}
