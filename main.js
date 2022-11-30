const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req,res)=>{
    const n = new Date().toLocaleTimeString()
    console.log("This page is created at: " + n)
    res.render('home', {now:n})
})

const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("My web is up!")