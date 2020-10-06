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