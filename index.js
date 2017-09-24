'use strict'
require('babel-polyfill')
require('babel-register')({})

const PORT = process.env.PORT || 4000
const server = require('./server/server.js')

server.listen(PORT, (err) => {
  if (err) { throw err }
  console.log(`Server running on port:${PORT}`)
})
