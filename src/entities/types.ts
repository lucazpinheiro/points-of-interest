export interface DBConnection<T> {
  (uri: string): Promise<T>
}

export interface BasePoint {
  name: string
  xAxis: number
  yAxis: number
}

export class Point implements BasePoint {
  name: string
  xAxis: number
  yAxis: number

  constructor (name: string, xAxis: number, yAxis: number) {
    this.name = name
    this.xAxis = xAxis
    this.yAxis = yAxis
  }

  distanceFrom (referencePoint: Query): number {
    const xAxisDistance = ((referencePoint.xAxis - this.xAxis) ** 2)
    const yAxisDistance = ((referencePoint.yAxis - this.yAxis) ** 2)
    return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
  }
}

export class Query {
  distance: number
  xAxis: number
  yAxis: number

  constructor (distance: number, xAxis: number, yAxis: number) {
    this.distance = distance
    this.xAxis = xAxis
    this.yAxis = yAxis
  }
}

export interface Model {
  getAllPoints(): Promise<Point[]>
  createPoint(point: Point): Promise<void>
}
