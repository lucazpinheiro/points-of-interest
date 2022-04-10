import pointsModel from '../pointsModel.js'

export default {
  async getPointsFromDB () {
    return await pointsModel.find()
  },
  async saveNewPointOnDB (point) {
    return await pointsModel.create({ ...point })
  }
}
