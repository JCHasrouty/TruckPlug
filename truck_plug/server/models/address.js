const db = require('../database');

class Address {
    static retrieveAddress (callback) {
        db.query('SELECT Address from Trucks', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Address;