const db = require('../database');

class truck_info {
    static retrieveTruckInfo (callback) {
        db.query('SELECT truck_name, address, city, zipcode, phone_number, payment_type, coordinates FROM trucks ORDER BY id', function (err, res) {
            if(err.error)
                return callback(err);
            callback(res);
        });
    }
}

module.exports = truck_info;