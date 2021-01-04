const express = require('express')
const { emitKeypressEvents } = require('readline')
const router = express.Router()
const EMP = require('../models/employee')

router.get('/', async(req,res) => {
    try{
        const emp = await EMP.find()
        res.json(emp)
    }catch(err){
        res.send('ERROR' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const emp = await EMP.findById(req.params.id)
           res.json(emp)
    }catch(err){
        res.send('ERROR' + err)
    }
})

router.post('/', async(req,res) => {
    const emp = new EMP({
        emp_id : req.body.emp_id,
        name : req.body.name,
        job_title : req.body.job_title,
        dept : req.body.dept,
        join_date : req.body.join_date,
        gender : req.body.gender,
        marital_status: req.body.marital_status,
        DOB : req.body.DOB,
        nationality : req.body.nationality
    })
    try{
        const e1 =  await emp.save() 
        res.json(e1)
    }
    catch(err){
        res.send('ERROR')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const emp = await EMP.findById(req.params.id) 
        emp.job_title = req.body.job_title,
        emp.dept = req.body.dept,
        emp.join_date = req.body.join_date,
        emp.gender = req.body.gender,
        emp.marital_status = req.body.marital_status,
        emp.DOB = req.body.DOB,
        emp.nationality = req.body.nationality
        const a1 = await emp.save()
        res.json(a1)   
    }catch(err){
        res.send('ERROR')
    }
})

router.delete('/:id',async(req,res)=> {
    try{
        const emp = await EMP.findById(req.params.id) 
        emp.name = req.body.name
        const a1 = await emp.remove()
        res.send('DELETED')   
    }catch(err){
        res.send('ERROR')
    }
})

module.exports = router