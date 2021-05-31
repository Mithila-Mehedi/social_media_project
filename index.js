const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const helmet = require('helmet')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}, () => {
        console.log("Connected to MongoDB");
    });
///middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


app.listen(8000, () => {
    console.log("backend server is running");
})