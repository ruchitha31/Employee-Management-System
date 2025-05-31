const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

// Create message
router.post('/', async (req, res) => {
    const message = new Message({
        empid: req.body.empid,
        Heading: req.body.header,
        Message: req.body.message,
    })
    try {
        const newmessage = await message.save()
        res.status(201).json(newmessage)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Get messages by empid
router.get('/by-empid/:empid', async (req, res) => {
    const empid = req.params.empid;
    try {
        const messages = await Message.find({ empid: empid });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const message = await Message.find()
        res.json(message)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router