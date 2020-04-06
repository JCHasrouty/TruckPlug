var express = require('express');
var Address = require('../models/address');

var router = express.Router();

router.get('/', (req, res) => {
    Address.retrieveAddress(function (err, address) {
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