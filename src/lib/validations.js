function validateRequestBody (body) {
  const bodyErrors = {}

  if (!body.name || typeof body.name !== 'string') {
    bodyErrors.name = 'property name of type string is required'
  }

  if (!body.y || typeof body.y !== 'number') {
    bodyErrors.y = 'property y of type number is required'
  }

  if (!body.x || typeof body.x !== 'number') {
    bodyErrors.x = 'property x of type number is required'
  }

  if (!body.y || typeof body.y !== 'number') {
    bodyErrors.y = 'property y of type number is required'
  }

  if (Object.keys(bodyErrors).length === 0) {
    return [true, null]
  }
  return [false, bodyErrors]
}

function validateQueryParameters (query) {
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
    paramErrors.d = 'd must be equal or greater than 0'
  }

  if (query.x < -100 || query.x > 100) {
    paramErrors.x = 'x must be between -100 and 100'
  }

  if (query.y < -100 || query.y > 100) {
    paramErrors.y = 'y must be between -100 and 100'
  }

  if (Object.keys(paramErrors).length === 0) {
    return [true, null]
  }
  return [false, paramErrors]
}

export default {
  validateQueryParameters,
  validateRequestBody
}
