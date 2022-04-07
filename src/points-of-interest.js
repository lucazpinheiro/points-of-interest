import express from 'express'
import pointsController from './pointsController.js'

const pointsOfInterest = express()
const PORT = 3000

pointsOfInterest.use(express.json())
pointsOfInterest.use(express.urlencoded({ extended: true }))

pointsOfInterest.get('/points', pointsController.getPointsHandler)
pointsOfInterest.post('/points', pointsController.postPointsHandler)

pointsOfInterest.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
