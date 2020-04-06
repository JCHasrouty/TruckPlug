var express = require('express');
var TruckName = require('../models/truck_name');

var router = express.Router();

router.get('/', (req, res) => {
    TruckName.retrieveTruckName(function (err, truck_name) {
        if(err)
            return res.json(err);
        return res.json(truck_name);
    });
});

// router.post('/', (req, res) => {
//     var address = req.body.address;
//
//     Cities.insert(city, (err, result) => {
//         if (err)
//             return res.json(err);
//         return res.json(result);
//     });
// });

module.exports = router;