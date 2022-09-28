import { Model, Point } from '../entities'

// export function presentationMapper (points: PointsDB[]): Points[] {
//   return points.map(point => {
//     return {
//       name: point.name,
//       x: point.xAxis,
//       y: point.yAxis
//     }
//   })
// }

// export function getDistanceBetweenPoints (a: PointsDB, b: PointsDB) {
//   const xAxisDistance = ((b.xAxis - a.xAxis) ** 2)
//   const yAxisDistance = ((b.yAxis - a.yAxis) ** 2)
//   return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
// }

// export function filterPointsByDistance (
//   points: PointsDB[],
//   maxDistance: number,
//   referencePoint: PointsDB
// ) {
//   return points.filter(point => {
//     return getDistanceBetweenPoints(point, referencePoint) <= maxDistance
//   })
// }

export default class DB {
  pointsModel: Model

  constructor (model: Model) {
    this.pointsModel = model
  }

  async getAllPoints (): Promise<Point[]> {
    return this.pointsModel.getAllPoints()
  }
}

// export default {
//   async getPointsFromDB (model, query: Query = {}) {
//     try {
//       const rawRecords = await model.find()
//       if (Object.keys(query).length === 0) {
//         return [presentationMapper(rawRecords), null]
//       }
//       const closestPoints = filterPointsByDistance(rawRecords, query.d, {
//         name: '',
//         xAxis: query.x,
//         yAxis: query.y
//       })

//       return [presentationMapper(closestPoints), null]
//     } catch (errors) {
//       return [null, errors]
//     }
//   },
//   // async saveNewPointToDB (model, point) {
//   //   try {
//   //     return [await model.create({
//   //       name: point.name,
//   //       x_axis: point.x,
//   //       y_axis: point.y
//   //     }), null]
//   //   } catch (errors) {
//   //     return [null, errors]
//   //   }
//   // },
//   // async connectToDB (databaseURI) {
//   //   try {
//   //     await mongoose.connect(databaseURI)
//   //     console.log('Connect to database')
//   //   } catch (err) {
//   //     console.log('Couldn\'t connect to database')
//   //     console.err(err)
//   //     process.exit(1)
//   //   }
//   // }
// }
