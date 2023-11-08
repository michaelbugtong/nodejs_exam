require('dotenv').config()

const express = require('express')
const app = express()

//app.use(express.json())

    
bodyparser = require('body-parser');
require('express-async-errors')

const db = require('./db'),
    userRoutes = require('./controllers/user.controller')


//middleware
app.use(bodyparser.json())
app.use('/users/list', userRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})


//first make sure db connection is successful
//then start the express server.
db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(4000,
            () => console.log('server started at 4000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))