export default function calculateDistanceBetweenTwoPoints (a, b) {
  const xAxisDistance = ((b.x - a.x) ** 2)
  const yAxisDistance = ((b.y - a.y) ** 2)
  return Math.trunc(Math.sqrt(xAxisDistance + yAxisDistance))
}
