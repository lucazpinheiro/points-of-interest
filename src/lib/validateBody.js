import { objectIsEmpty } from '../utils/index.js'

export default function validateBody (body) {
  const bodyErrors = {}

  if (!body.name || typeof body.name !== 'string') {
    bodyErrors.name = 'property name of type string is required'
  }

  if (!body.x || typeof body.x !== 'number') {
    bodyErrors.x = 'property x of type number is required'
  }

  if (!body.y || typeof body.y !== 'number') {
    bodyErrors.y = 'property y of type number is required'
  }

  if (objectIsEmpty(bodyErrors)) {
    return [true, null]
  }
  return [false, bodyErrors]
}
