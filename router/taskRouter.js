const express = require('express');
const router = express.Router();
const TASKS = require('../model/taskModel');
const taskControllers = require('../controller/taskController');

// CREATING TASKS 
router.post('/createTasks', async (req,res)=>{
    const Tasks = new TASKS({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        author: req.body.author,
    })
    try{
        const savedTasks = await Tasks.save() 
        res.status(200).json(savedTasks)
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

// GETTING ALL TASKS
router.get('/allTasks', async (req,res)=>{
    const allTasks  = await TASKS.find()
    try{
        res.json(allTasks)
    } catch (err){
        res.status(404).json({message: err.message})
    }
})

// GETTING SINGLE TASK
router.get('/singleTasks/:taskId', async (req,res)=>{
    try{
        const singleTasks = await TASKS.findById(req.params.taskId);
        res.json(singleTasks);
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

// UPDATING TASKS
router.patch('/update/:taskId', async (req,res)=>{
    try{
        const updateTasks = await TASKS.updateOne({_id:req.params.taskId},{$set:req.body});
        res.json(updateTasks);
    } catch(err){
        res.status(404).json({message: err.message})
    }
})

// DELETING TASKS
router.delete('/delete/:taskId', async (req,res)=>{
    try{
        const deleteTasks = await TASKS.findByIdAndDelete({_id:req.params.taskId});
        res.json(deleteTasks)
    } catch (err) {
        res.status(404).json({message: err.message})
    }
})

module.exports = router