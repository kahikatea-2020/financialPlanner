
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('binaryOptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('binaryOptions').insert([
        {id: 1, user_id: 1, target_amount:5000 },
        {id: 2, user_id: 1, target_amount:6000 },
        {id: 3, user_id: 1, target_amount:7000 },
        {id: 4, user_id: 1, target_amount:8000 },
        {id: 5, user_id: 1, target_amount:9000 },
      ]);
    });
};
