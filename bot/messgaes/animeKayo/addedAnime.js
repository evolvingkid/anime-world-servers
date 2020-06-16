const OnGoingAnimeSchema = require('../../../models/OnGoingAnime');

async function addedAnime(animeData) {

   console.log(animeData);
   // adding new episode
   var fetchData = await OnGoingAnimeSchema.update(
      {
         title: animeData['title'],
      },
      {
         $push:
         {
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
         }
      }
   );

   console.log(fetchData);
}

module.exports = addedAnime;