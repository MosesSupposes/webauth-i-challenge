const express = require('express')

const router = express.Router()

router.get('/rickAndMorty', (req, res) => {
    res.status(200).json({message: 'Wubba lubba dub dub!'})
})

router.get('/pewdiepie', (req, res) => {
    res.status(200).json({message: 'Subscribe to pewdiepie! https://www.youtube.com/user/PewDiePie'})
})

router.get('/a', (req, res) => {
    res.status(200).json({message: 'abcdefghijklmnopqrstuvwxyz'})
})

module.exports = router