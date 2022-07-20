import model from './pointsModel.js'

export default {
  async getPointsFromDB () {
    try {
      return [await model.find(), null]
    } catch (errors) {
      return [null, errors]
    }
  },
  async saveNewPointOnDB (point) {
    try {
      return [await model.create({ ...point }), null]
    } catch (errors) {
      return [null, errors]
    }
  }
}
