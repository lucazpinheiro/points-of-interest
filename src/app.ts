import express, { Express } from 'express'
import * as dotenv from 'dotenv'
import routes from './routes.js'
import db from './lib/db.js'

async function start () {
  dotenv.config()

  const pointsOfInterest = express()
  const PORT = process.env.PORT || 3000

  pointsOfInterest.use(express.json())
  pointsOfInterest.use(express.urlencoded({ extended: true }))
  pointsOfInterest.use('/', routes)

  await db.connectToDB(process.env.DATABASE_URL)

  pointsOfInterest.listen(PORT, () => console.log(`APP is running on localhost:${PORT}`))
}

start()
