import express, { Express } from 'express'
import mongoose from 'mongoose'
import DB from './database/db'
import ObjectModel, { mongoosePointModel } from './models/points.model'
import Service from './services/points.service'
import Controller from './controllers/points.controller'

const PORT = 3000

const app: Express = express()

app.use(express.json())

async function start () {
  try {
    const db = new DB(new ObjectModel(mongoosePointModel), mongoose.connect)
    const service = new Service(db)
    const controller = new Controller(service)

    await db.connect('mongodb://mongo/test')

    app.get('/points', controller.handlerGETRequest.bind(controller))
    app.post('/points', controller.handlerPOSTRequest.bind(controller))
    app.listen(PORT, () => {
      console.log(`server is up on http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(err)
  }
}

start()
