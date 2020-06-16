const AnimeSeries = require('../../../models/AnimeSeries');
const acessFroAnilist = require('../../../api/acessfromAnilist');

async function animeSeries(animeData) {

    var fetchData = await AnimeSeries.findOne({ title: animeData['title'] });

    var anilistFetchData = await acessFroAnilist(animeData['title']);

    if (fetchData === null) {
        animeSeries = new AnimeSeries({
            title: animeData['title'],
            genre: animeData['genre'],
            anilistid: anilistFetchData.id,
            type: anilistFetchData.type,
            status: anilistFetchData.status,
            description: anilistFetchData.description,
            season: anilistFetchData.season,
            seasonYear: anilistFetchData.seasonYear,
            episodes: anilistFetchData.episode,
            duration: anilistFetchData.duration,
            isAdult: anilistFetchData.isAdult,
            averageScore: anilistFetchData.averageScore,
            popularity: anilistFetchData.popularity,
            source: anilistFetchData.source,
            contryOfOrgin: anilistFetchData.contryOfOrgin,
            bannerImg: anilistFetchData.bannerImage,
            coverImg: anilistFetchData.coverImage.extraLarge,
            streamEpisode: anilistFetchData.streamingEpisodes,
            avalibility:
                [{
                    animesData:
                    {
                        channel: animeData['channel'],
                        category: animeData['category'],
                        link: animeData['link'],
                    }
                }]
        });

        
        animeSeries.save();
        return;
    }

    await AnimeSeries.updateOne(
        {
            title: animeData['title'],
        },
        {
            $push:
            {
                avalibility:
                    [{
                        animesData:
                        {
                            channel: animeData['channel'],
                            category: animeData['category'],
                            link: animeData['link'],
                        }
                    }]
            }
        }
    );
}
module.exports = animeSeries;