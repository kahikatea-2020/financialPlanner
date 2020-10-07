const connection = require('./connection')
const snakeCaseKeys = require('snakecase-keys')

module.exports = {
  createOption,
  getUserOptions,
  updateUserOption,
  deleteUserOption
}

function createOption(option, db = connection) {
  return db('binaryOptions').insert(snakeCaseKeys(option))
    .then(([id]) =>
      db('binaryOptions')
        .where('id', id)
        .select()
        .first()
    )
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserOptions(user_id, db = connection) {
  return db('binaryOptions')
    .select()
    .where('user_id', user_id)
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateUserOption(optionId, option, db = connection) {
  return db('binaryOptions')
    .where('id', optionId)
    .update(snakeCaseKeys(option))
    .then(() => db('binaryOptions').where('id', optionId).select().first())
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteUserOption(optionId, db = connection) {
  return db('binaryOptions')
    .where('id', optionId)
    .delete()
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}