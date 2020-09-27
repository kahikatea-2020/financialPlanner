const path = require('path')
const express = require('express')
const server = express()
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

const authRoutes = require('./routes/auth')
server.use('/api/v1', authRoutes)

module.exports = server
