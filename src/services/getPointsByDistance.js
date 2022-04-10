import getAllPoints from './getAllPoints.js'
import calculateDistanceBetweenTwoPoints from './calculateDistanceBetweenTwoPoints.js'

export default async function getPointsByDistance (query) {
  const [points, error] = await getAllPoints()
  if (error) {
    return [null, error]
  }
  const distance = query.d

  const closestPoints = points.filter(point => {
    const distanceBetweenPoints = calculateDistanceBetweenTwoPoints(point, {
      x: query.x,
      y: query.y
    })
    return distanceBetweenPoints <= distance
  })
  return [closestPoints, null]
}
