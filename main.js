//Import packages
const { application } = require('express')
const express=require('express')
const morgan=require('morgan')

//configure our port
//configure our port
//Check if it is set in the environment variable, if not then we default to 3000
const port= process.env.PORT||3000

// Create an instance of express application 
const app = express()

//Log all request
app.use(morgan('common'))

//GET /
app.get('/', (req,resp) => {

    //what is the media type
    resp.type('text/html')

    //set the status code
    resp.status(200)

    //send the response
    resp.send(`<h1>The time is now ${new Date()}</h1>`)
})

//Start our web application 
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)})