const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    emp_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    join_date: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    marital_status: {
        type: String,
        required: true
    },
    DOB: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Employee', employeeSchema)


