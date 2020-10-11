
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('binaryOptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('binaryOptions').insert([
        {id: 1, user_id: 1, target_amount:5000, history: JSON.stringify([100,200,300,400,500]) },
        {id: 2, user_id: 1, target_amount:6000, history: JSON.stringify([1000,2000,3000,4000,5000]) },
        {id: 3, user_id: 1, target_amount:7000, history: JSON.stringify([10000,20000,30000,40000,50000]) },
        {id: 4, user_id: 1, target_amount:8000, history: JSON.stringify([100000,200000,300000,400000,500000]) },
        {id: 5, user_id: 1, target_amount:9000, history: JSON.stringify([1000000,2000000,3000000,4000000,5000000]) },
      ]);
    });
};
