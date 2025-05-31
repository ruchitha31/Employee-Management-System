const express = require('express')
const router = express.Router()
const Department = require('../models/Department')

// Getting all
router.get('/', async (req, res) => {
    try {
        const department = await Department.find()
        res.json(department)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One
router.get('/:id', getDepartment, (req, res) => {
    res.json(res.department)
})

//Get departmentId by Name
router.get('/name/:name', getDepartmentId, (req, res) => {
    res.json(res.department)
})

// Creating one
router.post('/', async (req, res) => {
    const department = new Department({
        department_name: req.body.department_name
    })
    try {
        const newDepartment = await department.save()
        res.status(201).json(newDepartment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Updating One
router.patch('/:id', getDepartment, async (req, res) => {
    if (req.body.department_name != null) {
        res.department.department_name = req.body.department_name
    }
    try {
        const updatedDepartment = await res.department.save()
        res.json(updatedDepartment)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Deleting One
router.delete('/:id', getDepartment, async (req, res) => {
    try {
        await res.department.remove()
        res.json({ message: 'Deleted department' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getDepartment(req, res, next) {
    let department
    try {
        department = await Department.findById(req.params.id)
        if (department == null) {
            return res.status(404).json({ message: 'Cannot find department' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.department = department
    next()
}

async function getDepartmentId(req,res,next)
{
    let department
    try {
        department = await Department.find({department_name: req.params.name})
        if (department == null) {
            return res.status(404).json({ message: 'Cannot find department' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.department = department
    next()   
}

module.exports = router