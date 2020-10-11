
exports.up = function(knex) {
  return knex.schema.createTable('binaryOptions', (table) => {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.decimal('target_amount')
    table.decimal('reward_percent')
    table.decimal('initial_amount')
    table.decimal('exposed_balance')
    table.decimal('current_amount')
    table.string('history')
    table.decimal('win_rate')
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('binaryOptions')
};
