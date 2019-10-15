const bcrypt = require('bcrypt')
const UserModel = require('../models/User')

class UserController {
    static async index(req, res) {
        try {
            const users = await UserModel.all()
            res.status(200).json(users)
        } catch(e) {
            res.status(404).json({error: { message: "There are no users in the database yet." } })
        }
    }

    static async register(req, res) {
        try {
            const { username, password } = req.body
            
            const [newUserCreds] = await UserModel.create({
                username,
                password: bcrypt.hashSync(password, 8)
            })
            
            res.status(201).json(newUserCreds)

        } catch(e) {
            console.log(e)
            res.status(500).json({error: { message: 'Internal server error.' } })
        }

    }

    static async login(req, res) {
        try {
            const user = await UserModel.findByUsername(req.body.username)

            if (user && bcrypt.compareSync(req.body.password, user.password)) {
                req.session.username = user.username
                
                res.status(200).json({
                    success: "Welcome " + user.username,
                    user
                })
            } else {
                res.status(401).json({ error: { message: "Incorrect password."}})
            }
        } catch(e) {
            console.log(e)
            res.status(500).json({error: { message: "A user with the username of " + req.body.username + " does not exist."}})
        }
    }

    static async logout(req, res) {
        req.session.destroy(err => {
            res.status(200).json({message: "Goodbye! 👋🏾"})
        })
    }
}

module.exports = UserController