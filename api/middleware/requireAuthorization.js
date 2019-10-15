function requireAuthorization(req, res, next) {
    if (req.body && req.body.username && req.body.password) {
        next()
    } else {
        const err = new Error("You are missing a username and/or password in your request body.")
        err.status = 401
        
        next(err)
    }
}

module.exports = requireAuthorization