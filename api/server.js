// npm packages
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const sessions = require('express-session')
const KnexSessionStore = require('connect-session-knex')(sessions)

// Routers
const rootRouter = require('./routes/rootRouter')
const usersRouter = require('./routes/usersRouter')
const restrictedRouter = require('./routes/restrictedRouter')

// Custom middleware
const requireActiveSession = require('./middleware/requireActiveSession')


const sessionConfiguration = {
  name: 'webauth-i-challenge',
  secret: process.env.SESSION_SECRET || 'this is not secret',
  cookie: {
    httpOnly: process.env.NODE_ENV === 'production' ? true : false,
    maxAge: 1000 * 60 * 60, // sessions last for one hour
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: require('./data/dbClient'),
    createtable: true,
    clearInterval: 1000 * 60 * 30 // delete expired sessions every 30 min
  })
}

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

server.use(sessions(sessionConfiguration))
server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/', rootRouter)
server.use('/api', rootRouter)
server.use('/api/users', usersRouter)
server.use('/api/restricted', requireActiveSession, restrictedRouter)

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

server.listen(PORT, () => console.log('server running on port ' + PORT))

/**
 * Export app
 */

module.exports = server