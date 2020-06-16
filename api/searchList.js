const express = require('express');
const router = express.Router();
const config = require('config');

const adminAcessToken = config.get('adminAcessToken');
const OnGoingAnimeSchema = require('../models/OnGoingAnime');
const AnimeSeries = require('../models/AnimeSeries');
const AnimeOVA = require('../models/AnimeOVA');
const AnimeMovies = require('../models/AnimeMovies');
const { json } = require('express');

router.get('/', async (req, res) => {

    if (req.query.apikey !== adminAcessToken) {
        return res.json({
            messgae: 'Api is required'
        });
    }

    let {search, page} = req.query;
    let fetchData = [];
    
    // 1st prioty search list
    if (parseInt(page) == 1) {
        let tempData = [];
        // finid search from ongoinganime DB
        tempData =  await OnGoingAnimeSchema.find({ title : { $regex: RegExp(search) } }).limit(5);
        fetchData = tempData;
        // adding search from anime series
        tempData = await AnimeSeries.find({ title : { $regex: RegExp(search) } }).limit(5);
        fetchData.push(tempData);
        // adding search from anime movies
        tempData = await AnimeMovies.find({ title : { $regex: RegExp(search) } }).limit(5);
        fetchData.push(tempData);
        //adding search from OVA 
        tempData = await AnimeOVA.find({ title : { $regex: RegExp(search) } }).limit(5);
        fetchData.push(tempData);
    }
     return res.json(fetchData);
});

module.exports = router;