import { Point, Query } from '../entities/types'

// interface IService {
//   getAllPoints(): Point[],
//   getPointsByDistance (referencePoint: Query, DBPoints: Point[]): Point[]
// }

export default class Service {
  getPointsByDistance (referencePoint: Query, DBPoints: Point[]): Point[] {
    return DBPoints.filter(currentPoint => {
      return currentPoint.distanceFrom(referencePoint) <= referencePoint.distance
    })
  }
}
