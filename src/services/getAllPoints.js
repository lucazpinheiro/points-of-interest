import data from '../../fakeDb.js'

export default async function getAllPoints () {
  try {
    const points = data
    return [points, null]
  } catch (error) {
    return [null, error]
  }
}
