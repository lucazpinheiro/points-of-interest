import db from './db.js'

export default async function getAllPoints () {
  try {
    const points = await db.getPointsFromDB()
    return [points, null]
  } catch (error) {
    return [null, error]
  }
}
