import express from 'express'
import * as dotenv from 'dotenv'
import routes from './routes.js'
import db from './db.js'

dotenv.config()

const pointsOfInterest = express()
const PORT = process.env.DATABASE_URL || 3000

pointsOfInterest.use(express.json())
pointsOfInterest.use(express.urlencoded({ extended: true }))
pointsOfInterest.use('/', routes)

async function start () {
  await db.connectToDB(process.env.DATABASE_URL)

  pointsOfInterest.listen(PORT, () => console.log(`APP is running on localhost:${PORT}`))
}

start()
