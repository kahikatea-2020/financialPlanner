const connection = require('./connection')
const snakeCaseKeys = require('snakecase-keys')

module.exports = {
  createOption,
  getUserOptions,
  updateUserOption
}

function createOption (option, db = connection) {
  db('binaryOptions').insert(snakeCaseKeys(option))
}

function getUserOptions (user_id, db = connection) {
  db('binaryOptions')
    .select()
    .where('user_id',user_id)
}

function updateUserOption (optionId, option , db = connection) {
  db('binaryOptions')
  .where('id', optionId)
  .update(snakeCaseKeys(option))
  .then(() => db('expense').where('id', expenseId).select().first())
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err)
  })
}