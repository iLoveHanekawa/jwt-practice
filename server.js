require('dotenv').config()
require('express-async-errors')
const connectDB = require('./db/connect')
const errorHandler = require('./middlewares/errorHandler')
const noMatch = require('./middlewares/noMatch')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome</h1>`)
})

app.use(errorHandler)
app.use(noMatch)

const port = process.env.PORT || 5000

const start = () => {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`server listening on port: ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()