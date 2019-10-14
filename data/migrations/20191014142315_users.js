
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.incrememnts()
      tbl.timestamps(true, true)
      tbl.string('username', 20)
      tbl.string('password')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
