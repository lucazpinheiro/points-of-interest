import mongoose from 'mongoose'
import { Model, Point, BasePoint } from '../entities/types'

const pointSchema = new mongoose.Schema<BasePoint>({
  name: {
    type: String,
    required: true
  },
  xAxis: {
    type: Number,
    required: true
  },
  yAxis: {
    type: Number,
    required: true
  }
})

export const mongoosePointModel = mongoose.model<BasePoint>('points-of-interest', pointSchema, 'points-of-interest')

export default class ObjectModel implements Model {
  private model: typeof mongoosePointModel

  constructor (model: typeof mongoosePointModel) {
    this.model = model
  }

  async getAllPoints () {
    const mongoosePoints = await this.model.find()
    return mongoosePoints.map(point => new Point(point.name, point.xAxis, point.yAxis))
  }

  async createPoint (point: Point) {
    await this.model.create(point)
  }
}
