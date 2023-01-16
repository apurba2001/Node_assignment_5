const express = require('express')
const app = express()
const port = 8081

app.get("/", (req, res)=>{
    res.status(200)
    .setHeader("Content-Type", "text/plain")
    .send(`Choose '/welcome' or '/contact'`)
})

app.get('/welcome', (req, res)=>{
    res.status(200)
    .setHeader("Content-Type", "text/plain")
    .send("Welcome to Dominos!")
})
app.get('/contact', (req, res)=>{
    res.status(200)
    .setHeader("Content-Type", "application/json")
    .send({  
        phone: '18602100000', 
  	    email: 'guestcaredominos@jublfood.com' 
    })
})

app.listen(port, () => console.log(`Server Running at port ${port}`))

module.exports = app



