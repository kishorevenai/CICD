const express = require('express')
const app = express()



app.use('/' , (req,res) => {
    return res.send("hello")
})

console.log("haii")


app.listen(3500 , () => {
    console.log("Listening to port 3500")
})