const mongoose = require('mongoose')

const TimeSheetSchema = new mongoose.Schema({
    Empid:{
        type:String,
        required:true
    },
    TimeSheetdate: {
        type: String,
        required: true
    },
    ProjectWorked: {
        type: String,
        required: true
    },
    HoursWorked: {
        type: Number,
        required: true
    },
    AdditionalNotes: {
        type: String,
        required: true
    },
    Status:{
        type:String,
        required:false,
        default:'PENDING'
    }
})



module.exports = mongoose.model('Timesheet', TimeSheetSchema)
