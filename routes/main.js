const express = require('express')

const router = express.Router()
const { login, dashBoard } = require('../controllers/main')

const authMidWare = require('../middlewares/auth')

router.route('/dashboard').get(authMidWare, dashBoard)
router.route('/login').post(login)

module.exports = router