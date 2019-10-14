const db = require('../data/dbClient')

class User {
    static all() {
        return db('users')
    }

    static findById(id) {
        return db('users').where({id})
    }

    static async create(user) {
        const [id] =  await db('users').insert(user)
        return db('users').where({id}).first()
    }
}

module.exports = User