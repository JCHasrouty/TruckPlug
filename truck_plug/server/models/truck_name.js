const db = require('../database');

class TruckName {
    static retrieveTruckName (callback) {
        db.query('SELECT truck_name from Trucks ORDER by id', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = TruckName;