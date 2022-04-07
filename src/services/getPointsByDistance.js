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
      x_axis: query.x,
      y_axis: query.y
    })
    return distanceBetweenPoints <= distance
  })
  return [closestPoints, null]
}
