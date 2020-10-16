
exports.up = function(knex) {
  return knex.schema.createTable('binaryOptions', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.decimal('target_amount').defaultsTo(0)
    table.decimal('reward_percent').defaultsTo(0)
    table.decimal('initial_amount').defaultsTo(0)
    table.decimal('exposed_balance').defaultsTo(0)
    table.decimal('current_amount').defaultsTo(0)
    table.string('history').defaultsTo('[]')
    table.integer('wins').defaultsTo(0)
    table.integer('losses').defaultsTo(0)
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('binaryOptions')
};
