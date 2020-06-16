const AnimeOVA = require('../../models/AnimeOVA');
const acessFroAnilist = require('../../api/acessfromAnilist');

async function animeOVA(animeData) {
    
    var fetchData = await AnimeOVA.findOne({ title: animeData['title'] });

    if (fetchData === null) {

        var anilistFetchData = await acessFroAnilist(animeData['title']);

        animeSeries = new AnimeOVA({
            title: animeData['title'],
            genre: animeData['genre'],
            type: animeData['type'],
            anilistid: anilistFetchData.id,
            type: anilistFetchData.type,
            status: anilistFetchData.status,
            description: anilistFetchData.description,
            season:anilistFetchData.season,
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

     await animeSeries.save();
        return;
    }

    await AnimeOVA.updateOne(
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
module.exports = animeOVA;