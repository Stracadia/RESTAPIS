const cors = require('cors')
const express = require('express')
const notesRouter = require('./notes')
const app = express()

/* Put cors first because this allow for cross origin */
app.use(cors({
    origin : ["http://127.0.0.1:5500", "http://localhost:5500"]
}))
app.use(express.json())
app.use('/notes', notesRouter)

app.get('/', (req,res) => {
    res.json(
        {message : "MY NOTES!"}
    )
})
app.listen(3000)