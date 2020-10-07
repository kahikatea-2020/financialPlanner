const bcrypt = require('bcrypt')

exports.seed = async function(knex) {
  let password = await bcrypt.hash('123456',10)
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email:'proteus@gmail.com', password: password},
      ]);
    });
};
