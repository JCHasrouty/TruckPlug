var express = require('express');
var url = require('../models/url');

var router = express.Router();

router.get('/', (req, res) => {
    url.retrieveUrl(function (err, url) {
        if(err)
            return res.json(err);
        return res.json(url);
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