const db = require('../database');

class Coordinates {
    static retrieveCoordinates (callback) {
        db.query('SELECT coordinates from Trucks ORDER BY id', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = Coordinates;