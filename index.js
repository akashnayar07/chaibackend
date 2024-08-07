const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/twitter', (req,res)=> {
    res.send("Twiteeer")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})