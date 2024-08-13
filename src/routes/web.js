const express = require('express');
const { getHomepage,getSample, postCreateUser} = require('../controllers/HomeController');
const router = express.Router();

router.get('/',getHomepage);
router.get('/sample',getSample);
router.post('/create-user',postCreateUser);

module.exports = router;