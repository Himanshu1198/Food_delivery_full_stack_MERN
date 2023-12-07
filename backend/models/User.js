const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
  name: {
    type: String,
    reuqired: true,
  },
  location: {
    type: String,
    reuqired: true,
  },
  email: {
    type: String,
    reuqired: true,
  },
  password: {
    type: String,
    reuqired: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('user', UserSchema)
