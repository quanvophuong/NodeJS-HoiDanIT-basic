const express = require('express');
const { getHomepage,getSample, postCreateUser, getCreateUser, getUpdateUser} = require('../controllers/HomeController');
const router = express.Router();

router.get('/',getHomepage);
router.get('/sample',getSample);
router.get('/create',getCreateUser);
router.get('/update/:id',getUpdateUser);
router.post('/create-user',postCreateUser);

module.exports = router;