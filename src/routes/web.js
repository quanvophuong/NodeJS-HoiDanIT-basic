const express = require('express');
const { getHomepage,getSample, postCreateUser,
    getCreateUser, getUpdateUser, postUpdateUser,
    deleteUser
} = require('../controllers/HomeController');
const {deleteUserById} = require("../services/CRUDService");
const router = express.Router();

router.get('/',getHomepage);
router.get('/sample',getSample);
router.get('/create',getCreateUser);
router.get('/update/:id',getUpdateUser);
router.post('/create-user',postCreateUser);
router.post('/update-user/:id',postUpdateUser);
router.get('/delete-user/:id',deleteUser);

module.exports = router;