import mongoose from 'mongoose'
import { Model, Point, DBConnection } from '../entities/types'

export default class DB {
  pointsModel: Model
  connection: DBConnection<typeof mongoose>

  constructor (model: Model, connection: DBConnection<typeof mongoose>) {
    this.pointsModel = model
    this.connection = connection
  }

  async connect (URI: string): Promise<void> {
    await this.connection(URI)
    console.log('connect to DB')
  }

  async getAllPoints (): Promise<Point[]> {
    return this.pointsModel.getAllPoints()
  }

  async createPoint (point: Point): Promise<void> {
    await this.pointsModel.createPoint(point)
  }
}
