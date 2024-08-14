const connection = require("../config/database");
const getAllUsers = async () => {
    let [results] = await connection.query("SELECT * FROM users");
    return results;
}

const getUser = async (id) => {
    let [results] = await connection.query(`select * from users where id = ?`,
        [id]);
    let user = results && results.length > 0 ? results[0] : {};

    return user;
}

module.exports = {
    getAllUsers, getUser
}