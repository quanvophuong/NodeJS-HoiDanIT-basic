const connection = require('../config/database');

const getHomepage = (req,res) => {
    res.render("home");
}

const getSample = (req,res) => {
    res.render("sample");
}

const postCreateUser = (req,res) => {
    console.log(req.body)
    res.send('create a new user')
}

module.exports = {
    getHomepage,getSample,
    postCreateUser
}