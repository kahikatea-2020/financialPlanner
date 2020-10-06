const connection = require('./connection')
const snakeCaseKeys = require('snakecase-keys')

module.exports = {
  createOption,
  getUserOptions,
  updateUserOption,
  deleteUserOption
}

function createOption(option, db = connection) {
  db('binaryOptions').insert(snakeCaseKeys(option))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserOptions(user_id, db = connection) {
  db('binaryOptions')
    .select()
    .where('user_id', user_id)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateUserOption(optionId, option, db = connection) {
  db('binaryOptions')
    .where('id', optionId)
    .update(snakeCaseKeys(option))
    .then(() => db('expense').where('id', expenseId).select().first())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteUserOption(optionId, db = connection) {
  db('binaryOptions')
    .where('id', optionId)
    .delete()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}