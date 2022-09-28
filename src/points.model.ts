import mongoose from 'mongoose'

const pointSchema = new mongoose.Schema({
  name: String,
  x_axis: Number,
  y_axis: Number
})

export default mongoose.model('points-of-interest', pointSchema, 'points-of-interest')
