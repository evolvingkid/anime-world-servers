const axios = require('axios');

async function acessFromAnilist(animeTitle) {

    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search) {
          id
          title {
            romaji
          }
          type
          status
          description(asHtml:false)
          season
          seasonYear
          episodes
          duration
          chapters
          volumes
          isAdult
          averageScore
          popularity
          source
          countryOfOrigin
          bannerImage
          coverImage {
            extraLarge
          }
          streamingEpisodes{
            title
            url
            site
            thumbnail
          }
          characters(page: 1) {
            edges { # Array of character edges
              role
              voiceActors { # Array of voice actors of this character for the anime
                id
                name {
                  first
                  last
                }
              }
            }
          }
        }
      }
    }
    `;

    var variables = {
        search: animeTitle,
        page: 1,
        perPage: 3
    };;


    var body = JSON.stringify({ query: query, variables: variables });

    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    try {
        var fetchData = await axios.post('https://graphql.anilist.co', body, { headers: headers });
       // console.log(fetchData.data.data.Page.media[0]);
    } catch (error) {

        console.log(error.message);

    }

    return fetchData.data.data.Page.media[0];
}

module.exports = acessFromAnilist;