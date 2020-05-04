const db = require('../database');

class url {
    static retrieveUrl (callback) {
        db.query('SELECT details.url FROM details JOIN trucks on details.id = trucks.details_id ORDER BY trucks.id', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = url;