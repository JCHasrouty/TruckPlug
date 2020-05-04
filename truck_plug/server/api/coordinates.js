var express = require('express');
var Coordinates = require('../models/coordinates');

var router = express.Router();

router.get('/', (req, res) => {
    Coordinates.retrieveCoordinates(function (err, coordinates) {
        if(err)
            return res.json(err);
        return res.json(coordinates);
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