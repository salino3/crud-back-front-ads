const db = require('../../db/mysql');

const TABLE = 'users'

function getAlls () {
    return db.Alls(TABLE);
    
};

function One (id) {
    return db.One(TABLE, id);
    
};

function Delete (body) {
    return db.deleteOne(TABLE, body); 
};

function addOne (body) {
    return db.addOne(TABLE, body); 
};


module.exports = {
    getAlls,
    One,
    Delete,
    addOne
};



