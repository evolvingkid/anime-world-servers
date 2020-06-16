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
    var fetchData;

    if (req.query.limit !== undefined) {
        // return if limit is given
        var limit = parseInt(req.query.limit);
        fetchData = await OnGoingAnimeSchema.find().limit(limit);
        return res.json(fetchData);
    }


    if (req.query.pagenation !== undefined) {
        // return if page is given and limit of page is default as 10
        var pagination = parseInt(req.query.pagenation);
        if (pagination === 1) {

            fetchData = await OnGoingAnimeSchema.find().limit(10);
            return res.json(fetchData);
        }

        var skip = parseInt(req.query.pagenation);
        fetchData = await OnGoingAnimeSchema.find().skip(skip * 10).limit(10);
        return res.json(fetchData);
    }


    if (req.query.random !== undefined) {
        var randomVal = parseInt(req.query.random);
        fetchData = await OnGoingAnimeSchema.aggregate([{ $sample: { size: randomVal } }]);
        return res.json(fetchData);
    }


    // pass every data in one go
    fetchData = await OnGoingAnimeSchema.find();
    return res.json(fetchData);

});

module.exports = router;