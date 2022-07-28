import mongoose from 'mongoose'

export function presentationMapper (points) {
  return points.map(point => {
    return {
      name: point.name,
      x: point.x_axis,
      y: point.y_axis
    }
  })
}

export function getDistanceBetweenPoints (a, b) {
  const xAxisDistance = ((b.x_axis - a.x_axis) ** 2)
  const yAxisDistance = ((b.y_axis - a.y_axis) ** 2)
  return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
}

export function filterPointsByDistance (points, maxDistance, referencePoint) {
  return points.filter(point => {
    return getDistanceBetweenPoints(point, referencePoint) <= maxDistance
  })
}

export default {
  async getPointsFromDB (model, query = {}) {
    try {
      const rawRecords = await model.find()
      if (Object.keys(query).length === 0) {
        return [presentationMapper(rawRecords), null]
      }
      const closestPoints = filterPointsByDistance(rawRecords, query.d, {
        x_axis: query.x,
        y_axis: query.y
      })

      return [presentationMapper(closestPoints), null]
    } catch (errors) {
      return [null, errors]
    }
  },
  async saveNewPointToDB (model, point) {
    try {
      return [await model.create({
        name: point.name,
        x_axis: point.x,
        y_axis: point.y
      }), null]
    } catch (errors) {
      return [null, errors]
    }
  },
  async connectToDB (databaseURI) {
    try {
      await mongoose.connect(databaseURI)
      console.log('Connect to database')
    } catch (err) {
      console.log('Couldn\'t connect to database')
      console.err(err)
      process.exit(1)
    }
  }
}
