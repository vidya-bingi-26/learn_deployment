require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram',(req,res)=>{
    res.send("vidya__02")
})



app.listen(port,() => {
    console.log(`server running on ${port}`)
})