
exports.up = function(knex) {
  knex.schema.createTable('binaryOptions', (table) => {
    table.increments('id').primary()
    t.integer('user_id').references('users.id')
    table.decimal('targetAmount')
    table.decimal('rewardPercent')
    table.decimal('initialAmount')
    table.decimal('exposedBalance')
    table.array('history')
    table.decimal('winRate')
  })
};

exports.down = function(knex) {
  knex.schema.dropTable('binaryOptions')
};
