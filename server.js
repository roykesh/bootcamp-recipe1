const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const request = require('request')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/sanity', (req, res) => {
    console.log("Someone is here. The prophecy is upon us")
    res.send("OK")
})

app.get('/recipes/:food', (req, res) => {
    request(`http://www.recipepuppy.com/api/?q=${req.params.food}`, (err, response) => {
        let parsed = JSON.parse(response.body)
        let ingredients = (parsed.results[0].ingredients.trim().split(', '))
        // console.log(ingredients)
        res.send(parsed)
    })
})

/*
http://www.recipepuppy.com/api/
http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 
i : comma delimited ingredients
q : normal search query
*/



const port = 8080
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})