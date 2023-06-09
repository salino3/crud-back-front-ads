const db = require('../../db/mysql');

const TABLE = 'users'

function getAlls () {
    return db.Alls(TABLE);
    
};


module.exports = {
    getAlls
};



