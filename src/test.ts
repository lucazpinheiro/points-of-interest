import mongoose from 'mongoose'
import DB from './database/db'
import { Model, Point, Query } from './entities/types'
import ObjectModel, { mongoosePointModel } from './models/points.model'
import Service from './points.service'

const points: Point[] = []

const mockModel: Model = {
  async getAllPoints () {
    return [
      new Point('Lanchonete', 27, 12),
      new Point('Posto', 31, 18),
      new Point('Joalheria', 15, 12),
      new Point('Floricultura', 19, 21),
      new Point('Pub', 12, 8),
      new Point('Supermercado', 23, 6),
      new Point('Churrascaria', 28, 2)
    ]
  },
  async createPoint (point: Point) {
    points.push(point)
  }
}

const mockQuery = new Query(10, 20, 10)

async function makeTest () {
  const service = new Service()
  const db = new DB(new ObjectModel(mongoosePointModel), mongoose.connect)
  // const db = new DB(mockModel, mongoose.connect)

  await db.connect('mongodb://localhost/test')

  console.log('get points')
  const points = await db.getAllPoints()
  points.forEach(point => console.log(point.name))

  console.log(`filter points by distance ${mockQuery.distance}`)
  const filteredPoints = service.getPointsByDistance(mockQuery, points)
  filteredPoints.forEach(point => console.log(point.name))

  // console.log('\ncreate point')
  // await Promise.all([
  //   new Point('Lanchonete', 27, 12),
  //   new Point('Posto', 31, 18),
  //   new Point('Joalheria', 15, 12),
  //   new Point('Floricultura', 19, 21),
  //   new Point('Pub', 12, 8),
  //   new Point('Supermercado', 23, 6),
  //   new Point('Churrascaria', 28, 2)
  // ].map(point => db.createPoint(point)))

  // console.log('\nget points')
  // const points2 = await db.getAllPoints()
  // points2.forEach(point => console.log(point.name))
}

makeTest()
