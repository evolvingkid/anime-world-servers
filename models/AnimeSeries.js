const mongoose = require('mongoose');

const AnimeSeries = new mongoose.Schema({
    title: { type: String },
    Tag: [],
    type: { type: String },
    anilistid: {},
    status: { type : String },
    description: { type : String },
    season: { type : String },
    seasonYear: { type : String },
    episodes: { },
    duration: { }, 
    isAdult: { type: Boolean},
    source: { type : String },
    averageScore: { },
    popularity: { },
    contryOfOrgin: { type : String },
    bannerImg: { type : String },
    coverImg: { type : String },
    streamEpisode: [{ }],
    avalibility:
        [{
            animesData:
            {
                channel: { type: String },
                category: { type: String },
                link: { type: String },
            }
        }]
});
module.exports = User = mongoose.model('AnimeSeries', AnimeSeries);