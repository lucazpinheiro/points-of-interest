import db from './db.js'

export default async function getAllPoints (newPoint) {
  try {
    const points = await db.saveNewPointOnDB({
      name: newPoint.name,
      x_axis: newPoint.x,
      y_axis: newPoint.y
    })
    return [points, null]
  } catch (error) {
    return [null, error]
  }
}
