const express = require('express');
const router = express.Router();
const config = require('config');

const adminAcessToken = config.get('adminAcessToken');
const horribleApi = require('../horribleSub/index');

router.get('/', async (req, res) => {

    if (req.query.apikey !== adminAcessToken) {
        return res.json({
            messgae: 'Api is required'
        });
    }
    let { search } = req.query;
    let fetchData = [];

    // torrent fetcher
    let torrent = await horribleApi.searchAnime(search);
    torrent = JSON.parse(torrent);
    for (let index = 0; index < torrent[0].eps.length; index++) {
        fetchData.push({ title: torrent[0].eps[index].title, videotype: '1080p', link: torrent[0].eps[index]['1080p'] });
        fetchData.push({ title: torrent[0].eps[index].title, videotype: '720p', link: torrent[0].eps[index]['720p'] });
        fetchData.push({ title: torrent[0].eps[index].title, videotype: '480p', link: torrent[0].eps[index]['480p'] });
    }

    return res.json(fetchData);
});

module.exports = router;