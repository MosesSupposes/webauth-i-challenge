const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).sendStatus(200)
})

module.exports = router