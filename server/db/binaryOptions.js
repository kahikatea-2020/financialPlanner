const connection = require('./connection')

module.exports = {
  createOption,
  getUserOptions,
  updateUserOption
}

function createOption (option, db = connection) {
  db('binaryOptions').insert({
    id: option.id,
    user_id: option.userId,
    target_amount: option.targetAmount,
    reward_percent: option.rewardPercent,
    initial_amount: option.initialAmount,
    exposed_balance: option.exposedBalance,
    history: option.history,
    win_rate: option.winRate
  })
}

function getUserOptions (user_id, db = connection) {
  db('binaryOptions')
    .select()
    .where('user_id',user_id)
}

function updateUserOption (option , db = connection) {
  db('binaryOptions')
    .update({
      id: option.id,
    user_id: option.userId,
    target_amount: option.targetAmount,
    reward_percent: option.rewardPercent,
    initial_amount: option.initialAmount,
    exposed_balance: option.exposedBalance,
    history: option.history,
    win_rate: option.winRate
    })
}