const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const chef = require('./Data/chef.json')
const team = require('./Data/recipes.json')
const trending = require('./Data/trebding.json')

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/chef', (req, res)=> {
    res.send(chef)
})
app.get('/trending', (req, res)=> {
    res.send(trending)
})

app.get('/team', (req, res)=> {
    res.send(team)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})