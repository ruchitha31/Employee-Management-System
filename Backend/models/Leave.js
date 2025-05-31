const mongoose = require('mongoose')


const LeavesSchema = new mongoose.Schema({
  employee_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required:false
  },
  empid:{
    type:String,
    required:true
  },
  leave_type: {
    type: String,
    required: true
  },
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Leaves', LeavesSchema)
