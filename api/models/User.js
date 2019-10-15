const db = require('../data/dbClient')

class User {
    static all() {
        return db('users')
    }

    static findByUsername(username) {
        return db('users').where({username}).first()
    }

    static async create(userCreds) {
        await db('users').insert(userCreds)
        const { username } =  await this.findByUsername(userCreds.username)
        return db('users').where({username})
    }
}

module.exports = User