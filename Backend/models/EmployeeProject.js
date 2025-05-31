const mongoose = require('mongoose')

const ProjectEmployeeSchema = new mongoose.Schema({
    employee_id: {
    type: String,
    required: true
  },
  project_id: {
    type: String,
    required: true
  },
  role: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('ProjectEmployee', ProjectEmployeeSchema)