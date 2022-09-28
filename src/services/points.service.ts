import mongoose from 'mongoose'
import { Point, Query, IDB, IService } from '../entities/types'

export default class Service implements IService {
  private DBObject: IDB<typeof mongoose>

  constructor (DBObject: IDB<typeof mongoose>) {
    this.DBObject = DBObject
  }

  async getAllPoints () {
    return await this.DBObject.getAllPoints()
  }

  async getPointsByDistance (referencePoint: Query) {
    const allPoints = await this.getAllPoints()
    return allPoints.filter(currentPoint => {
      return currentPoint.distanceFrom(referencePoint) <= referencePoint.distance
    })
  }

  async createNewPoint (point: Point) {
    await this.DBObject.createPoint(point)
  }
}
