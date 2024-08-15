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

const updateUserById = async (id,email,name,city) => {
    let [results] = await connection.query(`UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, id]);
}

const deleteUserById = async (id) => {
    let [results] = await connection.query(`DELETE FROM users WHERE id = ?`,
        [id]);
}

module.exports = {
    getAllUsers, getUser,updateUserById,
    deleteUserById
}