const connection = require('../connection')
const bcrypt = require('bcrypt')
const fn = require('./user')

const authenticate = async (data, db = connection) => {
  try {
    const user = await db('users').where('email', data.email).first()
    if (typeof user === 'undefined') return 'Email does not exist'

    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) return 'Password does not match'

    const userDetails = await fn.getUserProfile(user.id)
    return userDetails
  } catch (err) {
    return 'Authentication - Something went wrong'
  }
}

const newUser = async (data, db = connection) => {
  const { password, confirmPassword, email, fullName } = data
  try {
    if (password !== confirmPassword) return 'Password does not match'
    const hashPassword = await bcrypt.hash(password, 10)
    const [ id ] = await db('users').insert({
      email,
      password: hashPassword
    })
    await db('profiles').insert({
      user_id: id,
      full_name: fullName
    })
    return { id, email, fullName }
  } catch (err) {
    return err.stack
  }
}

module.exports = {
  authenticate,
  newUser
}
