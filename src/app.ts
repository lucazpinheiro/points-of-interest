import express, { Express } from 'express'
import mongoose from 'mongoose'
import DB from './database/db'
import ObjectModel, { mongoosePointModel } from './models/points.model'
import Service from './services/points.service'
import Controller from './points.controller'

const PORT = 3000

const app: Express = express()

app.use(express.json())

async function start () {
  const db = new DB(new ObjectModel(mongoosePointModel), mongoose.connect)
  const service = new Service(db)
  const controller = new Controller(service)

  await db.connect('mongodb://localhost/test')

  app.get('/points', controller.handlerGETRequest.bind(controller))
  app.listen(PORT, () => {
    console.log(`server is up on http://localhost:${PORT}`)
  })
}

start()
