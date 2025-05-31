const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    empid: {
        type: String,
        required: true
    },
    Heading: {
        type: String,
        required: true
    },
    Message: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: false,
        default: new Date().toLocaleDateString()
    },
    time: {
        type: String,
        required: false,
        default: new Date().toLocaleTimeString()
    }
})

module.exports = mongoose.model('Message', MessageSchema)
