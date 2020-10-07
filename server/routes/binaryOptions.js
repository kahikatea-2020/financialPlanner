const express = require('express')
const router = express.Router()
const db = require('../db/binaryOptions')
const camelcaseKeys = require('camelcase-keys')
module.exports = router

// GET api/v1/binaryOptions/
router.get('/:userId', (req, res) => {
  return db.getUserOptions(req.params.userId)
    .then(options => {
      res.json(camelcaseKeys(options))
    })
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})
// POST api/v1/binaryOptions/
router.post('/', (req, res) => {
  return db.createOption(req.body)
    .then(option => {
      res.json(camelcaseKeys(option))
    })
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

// PUT api/v1/binaryOptions/:optionId
router.put('/:optionId', (req, res) => {
  return db.updateUserOption(req.params.optionId, req.body)
    .then(option => {
      res.json(camelcaseKeys(option))
    })
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:optionId', (req, res) => {
  return db.deleteUserOption(req.params.optionId)
    .catch((err) => {
      res.status(500).json('DATABASE ERROR: ' + err.message)
    })
})