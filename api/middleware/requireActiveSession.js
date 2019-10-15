function requireActiveSession(req, res, next) {
    if (req.session && req.session.username) {
        next()
    } else {
        const err = new Error('You need to login to access this enpoint.')
        err.status = 401
        next(err)
    }
}

module.exports = requireActiveSession