const db = require('../database');

class url {
    static retrieveUrl (callback) {
        db.query('SELECT url from Trucks', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = url;