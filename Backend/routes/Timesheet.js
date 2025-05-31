const express = require('express')
const router = express.Router()
const Timesheet = require('../models/Timesheet')


router.get('/', async (req, res) => {
    try {
        const joinedData = await Timesheet.aggregate([
            {
                $lookup: {
                    from: 'employees',
                    localField: 'Empid',
                    foreignField: 'empid',
                    as: 'employee'
                }
            },
            {
                $unwind: '$employee'
            },
            {
                $project: {
                    TimeSheetdate: 1,
                    ProjectWorked: 1,
                    HoursWorked: 1,
                    AdditionalNotes: 1,
                    Status: 1,
                    'EmployeeFullName': {
                        $concat: ['$employee.first_name', ' ', '$employee.last_name']
                    },
                    'EmpId': '$employee.empid',
                    'salary': '$employee.salary'
                }
            }
        ]);
        res.json(joinedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Creating one Timesheet
router.post('/', async (req, res) => {
    const timesheet = new Timesheet({
        Empid: req.body.Empid,
        TimeSheetdate: req.body.TimeSheetdate,
        ProjectWorked: req.body.ProjectWorked,
        HoursWorked: req.body.HoursWorked,
        AdditionalNotes: req.body.AdditionalNotes,
    })
    try {
        const newTimesheet = await timesheet.save()
        res.status(201).json(newTimesheet)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//update status
router.post('/:timesheetid/update-status', async (req, res) => {
    const timesheetid = req.params.timesheetid;
    const status = req.body.Status;
    try {
        const updatedTimesheet = await Timesheet.findByIdAndUpdate(
            timesheetid,
            { $set: { Status: status } },
            { new: true }
        );
        if (!updatedTimesheet) {
            return res.status(404).json({ message: 'sheet not found' });
        }
        res.status(200).json(updatedTimesheet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
module.exports = router