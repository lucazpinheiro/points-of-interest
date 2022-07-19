import db from './db.js'
import getAllPoints from './getAllPoints.js'
import getPointsByDistance from './getPointsByDistance.js'
import saveNewPoint from './saveNewPoint.js'
import validateQueryParams from './validateQueryParams.js'
import validateBody from './validateBody.js'

export default {
  db,
  validateQueryParams,
  getAllPoints,
  getPointsByDistance,
  validateBody,
  saveNewPoint
}
