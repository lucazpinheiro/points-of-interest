
function calculateDistanceBetweenTwoPoints (a, b) {
  const xAxisDistance = ((b.x_axis - a.x_axis) ** 2)
  const yAxisDistance = ((b.y_axis - a.y_axis) ** 2)
  return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
}

function mapPointsFromDBtoPresentation (points) {
  return points.map(point => {
    return {
      name: point.name,
      x: point.x_axis,
      y: point.y_axis
    }
  })
}

export default async (db, query = {}) => {
  const [points, error] = await db.getPointsFromDB()
  console.log([points, error])
  if (error) {
    return [null, error]
  }

  if (Object.keys(query).length === 0) {
    return [mapPointsFromDBtoPresentation(points), null]
  }

  const distance = query.d

  const closestPoints = points.filter(point => {
    const distanceBetweenPoints = calculateDistanceBetweenTwoPoints(point, {
      x: query.x,
      y: query.y
    })
    return distanceBetweenPoints <= distance
  })
  return [mapPointsFromDBtoPresentation(closestPoints), null]
}
