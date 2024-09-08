require('dotenv').config()
const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.send("hello world")
})
app.get('/my', (req, res) => {
    res.send("aniket")
})


app.listen(process.env.PORT, () => {
    console.log(`working on ${process.env.PORT}`)
})