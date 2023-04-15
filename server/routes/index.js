const express = require('express');
const router = express.Router();
const userRouter = require('./users');
const historyRouter = require('./histories');


router.use('/users', userRouter);
router.use('/histories', historyRouter);

module.exports = router;