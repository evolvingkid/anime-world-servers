const express = require('express');
const router = express.Router();
const config = require('config');

const adminAcessToken = config.get('adminAcessToken');
const OnGoingAnimeSchema = require('../models/OnGoingAnime');

router.get('/', async (req, res) => {

    if (req.query.apikey !== adminAcessToken) {
        return res.json({
            messgae: 'Api is required'
        });
    }
    
    var fetchData = await OnGoingAnimeSchema.find({seasonYear: {$gt: 2018}}).limit(10);

    res.json(fetchData);

});

module.exports = router;