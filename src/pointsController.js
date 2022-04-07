import services from './services/index.js'
import { objectIsEmpty } from './utils/index.js'

export default {
  async getPointsHandler (req, res) {
    if (objectIsEmpty(req.query)) {
      const [points, errors] = await services.getAllPoints()
      if (errors) {
        res.status(500).json({
          error: 'something went wrong'
        })
        return
      }
      res.status(200).json(points)
      return
    }

    const [paramsAreOk, paramErrors] = services.validateQueryParams(req.query)
    if (!paramsAreOk) {
      res.status(400).json({
        msg: 'bad request',
        errors: paramErrors
      })
      return
    }

    const [points, errors] = await services.getPointsByDistance(req.query)
    if (errors) {
      res.status(500).json({
        error: 'something went wrong'
      })
      return
    }
    res.status(200).json(points)
  },
  async postPointsHandler (req, res) {
    res.status(200).json({
      msg: 'creating point'
    })
  }
}
