const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('tasks', taskSchema)