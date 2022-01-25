//add some code that allows us to create a server and use Express js
const express = require('express')
//require body parser to help us tap into the form data
const bodyParser = require('body-parser')

//get the app to use the packages
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
const port = 3000

//load our css styles 
app.use(express.static(__dirname + '/style.css'));

//create a get request that responds with the index.html file
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html')
})

//create a post request that sends data to our server
app.post('/', function (request, response) {
    //create some logic for our calculator to work
let num1 = parseInt(request.body.num1)
let num2 = parseInt(request.body.num2)
let addition = (num1 + num2)

    response.send(`The result of this calculation is ${addition}`)
})

//create a new route, post request and logic for the BMI calculator below
app.get('/bmicalculator', function(request, response) {
    response.sendFile(__dirname + '/bmiCalculator.html')
})

//make this the same / as what's in your form action
app.post('/bmicalculator', function (request, response) {
    //create some logic for our calculator to work
let weight = Number(request.body.weight)
let height = Number(request.body.height)
let bmi = Math.round(weight / (height** 2))

    response.send(`The result of this calculation is ${bmi}.`)
})


//this starts up the localhost 3000 on our local machine
app.listen(port, () => {
    console.log(`Hey Debbie, your new server is listening on ${port}`)
})