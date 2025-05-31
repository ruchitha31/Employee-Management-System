const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
  department_name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Department', DepartmentSchema)
