const mongoose = require('mongoose');

const OnGoingAnimeSchema = new mongoose.Schema({
    title: { type: String },
    Tag: [],
    anilistid: {},
    author: { type: String },
    type: { type: String },
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
    characters: {
        edges: [ ],
    },
    avalibility:
        [{
            channels:
            {
                channelName: { type: String },
                episodeName: { type: String },
                episode: {},
                link: { type: String }
            }
        }]
});

module.exports = User = mongoose.model('onGoingAnime', OnGoingAnimeSchema);