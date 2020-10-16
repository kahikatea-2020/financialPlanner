
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('binaryOptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('binaryOptions').insert([
        {id: 1, user_id: 1, target_amount:5000, initial_amount: 1000, current_amount:1000, exposed_balance:100, history: JSON.stringify([]) },
        {id: 2, user_id: 1, target_amount:6000, initial_amount: 1000, current_amount:1000, exposed_balance:100, history: JSON.stringify([]) },
        {id: 3, user_id: 1, target_amount:7000, initial_amount: 1000, current_amount:1000, exposed_balance:100, history: JSON.stringify([]) },
        {id: 4, user_id: 1, target_amount:8000, initial_amount: 1000, current_amount:1000, exposed_balance:100, history: JSON.stringify([]) },
        {id: 5, user_id: 1, target_amount:9000, initial_amount: 1000, current_amount:1000, exposed_balance:100, history: JSON.stringify([]) },
      ]);
    });
};
