import express from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import pointsController from './pointsController.js'

dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', err => {
  console.error(err)
  process.exit(1)
})
db.once('open', () => console.log('Connected to database'))

const pointsOfInterest = express()
const PORT = 3000

pointsOfInterest.use(express.json())
pointsOfInterest.use(express.urlencoded({ extended: true }))

pointsOfInterest.get('/points', pointsController.getPointsHandler)
pointsOfInterest.post('/points', pointsController.postPointsHandler)

pointsOfInterest.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
