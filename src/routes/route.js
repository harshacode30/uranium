const express = require('express');
const loggermodule = require('../logger/logger/')
const helperModule = require('../util/helper')

const router = express.Router();

router.get('/test-me', function (req, res) {
    loggermodule.welcomeMessage()
    helperModule.printTodaysDate()
    helperModule.printCurrentMonth()
    helperModule.printBatchInformation()
    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason