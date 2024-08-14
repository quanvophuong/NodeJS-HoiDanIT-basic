const connection = require('../config/database');
const {getAllUsers,getUser} = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    res.render("home", {listUsers: results});
}

const getSample = (req, res) => {
    res.render("sample");
}

const getCreateUser = (req, res) => {
    res.render("create");
}

const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let results = await getUser(id);
    res.render("edit",{data: results});
}

const postCreateUser = async (req, res) => {
    let {email, name, city} = req.body;

    const [results, fields] = await connection.query(`INSERT INTO users (email, name, city) VALUES (?,?,?)`,
        [email, name, city]);
    res.send('create user succeed');
}

module.exports = {
    getHomepage, getSample,
    postCreateUser, getCreateUser,
    getUpdateUser
}