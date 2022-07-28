import validations from './lib/validations.js'
import db from './lib/db.js'
import model from './pointsModel.js'

export default {
  async getPointsHandler (req, res) {
    if (Object.keys(req.query).length === 0) {
      const [points, errors] = await db.getPointsFromDB(model)
      if (!errors) {
        res.status(200).json(points)
        return
      }
      res.status(500).json({
        msg: 'Internal server error'
      })
      return
    }

    const [paramsAreOk, paramErrors] = validations.validateQueryParameters(req.query)
    if (!paramsAreOk) {
      res.status(400).json({
        msg: 'bad request',
        errors: paramErrors
      })
      return
    }

    const [points, errors] = await db.getPointsFromDB(model, req.query)
    if (errors) {
      res.status(500).json({
        error: 'Internal server error'
      })
      return
    }
    res.status(200).json(points)
  },
  async postPointsHandler (req, res) {
    const { body } = req

    const [bodyIsOk, bodyErrors] = validations.validateBody(body)
    if (!bodyIsOk) {
      res.status(400).json({
        msg: 'bad request',
        errors: bodyErrors
      })
      return
    }

    const [newPointIsOk, newPointErrors] = await db.saveNewPointToDB(model, { ...body })
    if (!newPointIsOk) {
      res.status(500).json({
        msg: 'Internal server error'
      })
      return
    }
    res.status(200).json({
      msg: 'new point saved'
    })
  }
}
