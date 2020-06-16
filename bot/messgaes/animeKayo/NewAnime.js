
const OnGoingAnimeSchema = require('../../../models/OnGoingAnime');
const acessFroAnilist = require('../../../api/acessfromAnilist');

async function newAnime(animeData) {

    var anilistFetchData = await acessFroAnilist(animeData['title']);

    // saving new anime
    onGoingAnimeSchema = new OnGoingAnimeSchema({
        title: animeData['title'],
        Tag: animeData['Genre'],
        author: animeData['author'],
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
                channels:
                {
                    channelName: 'AnimeKayo',
                    episodeName: animeData['animeEpisodeTitle'],
                    episode: animeData['episode'],
                    link: animeData['link']
                }
            }]

    });

    await onGoingAnimeSchema.save();
}
module.exports = newAnime;