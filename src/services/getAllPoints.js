import db from './db.js'

function mapPointsFromDBtoPresentation (points) {
  return points.map(point => {
    return {
      name: point.name,
      x: point.x_axis,
      y: point.y_axis
    }
  })
}

export default async function getAllPoints () {
  try {
    const points = await db.getPointsFromDB()
    return [mapPointsFromDBtoPresentation(points), null]
  } catch (error) {
    return [null, error]
  }
}
