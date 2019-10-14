// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: "postgres://localhost/webauth-i-challenge",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './api/data/migrations'
    },

    seeds: {
      directory: './api/data/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: "postgres://localhost/webauth-i-challenge",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './api/data/migrations'
    },

    seeds: {
      directory: './api/data/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: "postgres://localhost/webauth-i-challenge",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './api/data/migrations'
    },

    seeds: {
      directory: './api/data/seeds'
    }
  }

};
