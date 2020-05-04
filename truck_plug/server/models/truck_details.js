const db = require('../database');

class truck_details {
    static retrieveTruckDetails (callback) {
        db.query('SELECT food_type, rating, price_range, food_suggest, url from details ORDER BY id', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = truck_details;