var express = require('express');
var TruckDetails = require('../models/truck_details');

var router = express.Router();

router.get('/', (req, res) => {
    TruckDetails.retrieveTruckDetails(function (err, address) {
        if(err)
            return res.json(err);
        return res.json(address);
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