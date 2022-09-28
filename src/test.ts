import DB from './lib/db'
import { Model, Point, Query } from './entities'

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
  }
}

const mockQuery = new Query(7, 20, 12)

async function makeTest () {
  // const db = new DB(mockModel)
  // const points = await db.getAllPoints()
  // points.forEach(point => console.log(point.name))

  // const distance = new Point('Lanchonete', 27, 12)
  //   .distanceFrom(mockQuery)
  // console.log('distance === 7', distance)
}

makeTest()
