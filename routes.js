const express = require('express');
const router = express.Router();
const MailController = require('./src/controllers/MailController');
const path = require('path');

router.get('/', (req, res) => res.render('index.html'));
router.post('/subscribe', MailController.store);

module.exports = router;