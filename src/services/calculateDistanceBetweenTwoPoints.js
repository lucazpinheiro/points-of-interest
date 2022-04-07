export default function calculateDistanceBetweenTwoPoints (a, b) {
  const xAxisDistance = ((b.x_axis - a.x_axis) ** 2)
  const yAxisDistance = ((b.y_axis - a.y_axis) ** 2)
  return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
}
