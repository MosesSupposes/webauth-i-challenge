function requireAuthorization(req, res, next) {
    if (req.body && req.body.username && req.body.password) {
        next()
    } else {
        res.status(401).json({ error: { message: "You are missing a username and/or password in your request body." } })
    }
}

module.exports = requireAuthorization