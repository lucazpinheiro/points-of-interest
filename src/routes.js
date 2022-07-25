import Router from 'express'
import pointsController from './pointsController.js'

const routes = Router()

routes.get('/points', pointsController.getPointsHandler)
routes.post('/points', pointsController.postPointsHandler)
routes.get('/status', (req, res) => res.status(200).json({ status: 'Up and running' }))

export default routes
