const express = require('express')
const helmet = require('helmet')
const rootRouter = require('./routes/rootRouter')
const usersRouter = require('./routes/usersRouter')
const restrictedRouter = require('./routes/restrictedRouter')

/**
 * Constants 
 */

const PORT = process.env.PORT || 4000
const ENV = process.env.NODE_ENV || 'development'


/**
 * Define server
 */

const server = express()

/**
 * Middleware
 */

server.use(helmet(), express.json())
server.use('/', rootRouter)
server.use('/api', rootRouter)
server.use('/api/users', usersRouter)
// server.use('/api/restricted', restrictedRouter)

/**
 * Error Handlers
 */

server.use((req, res, next) => {
    let err = new Error('Not found')
    err.status  = 404
  
    next(err)
  })
  
server.use((err, req, res, next) => {
    err.status = (err.status || 500)
    err.message = (err.message || 'Internal Server Error')
    if (ENV === 'production') err.stack = undefined 

    console.error(err.message)

    res.status(err.status).json({ errors: { status: err.status, message: err.message } })
})

/**
 * Start server
 */

server.listen(PORT, () => 'server running on port ' + PORT)

/**
 * Export app
 */

module.exports = server