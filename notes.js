const fs = require('fs/promises')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res) => {
    const listFile = await fs.readFile('./list.json', 'utf-8');
    const listTask = JSON.parse(listFile);

    res.send(listTask)
})

router.post('/', async (req,res) => {

    const listFile = await fs.readFile('./list.json', 'utf-8');
    const listTask = JSON.parse(listFile);

    listTask.push({
        id : listTask.length + 1,
        task : req.body.task
    });

    await fs.writeFile(
        './list.json',
        JSON.stringify(listTask,null,2)
    )
    console.log(req.body.task)

    /* Sends response to the server that the following submitted form was received! */
    res.json({
        message : "Task Data received!"
    })
})
module.exports = router