const bcrypt = require('bcrypt')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email:'proteus@gmail.com', password: bcrypt.hash('123456',10)},
      ]);
    });
};
