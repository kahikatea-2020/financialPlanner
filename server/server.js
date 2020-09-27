const path = require('path')
const express = require('express')
const server = express()
server.use(express.json())
if (process.env.NODE_ENV !== 'production') require('dotenv').config()
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/auth', require('./routes/auth'))
module.exports = server
