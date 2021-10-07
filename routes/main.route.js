const { Router } = require('express');
const express = require('express');
const router = express.Router();

const { login, dashBoard } = require('../controllers/main.controller');
const authMiddleware = require('../middleware/auth');

router.route('/dashboard').get(authMiddleware, dashBoard);
router.route('/login').post(login);

module.exports = router;
