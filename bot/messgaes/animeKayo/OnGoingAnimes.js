const OnGoingAnimeSchema = require('../../../models/OnGoingAnime');
const newAnime = require('./NewAnime');
const addedAnime = require('./addedAnime');

async function onGoinganime(msg) {
    //console.log(msg.caption);
    var animeData =
    {
        animeEpisodeTitle: null,
        title: '',
        episode: null,
        Genre: [],
        author: null,
        link: null
    };
    var splitCaption = msg.caption.split("|");

    // acess anime animeEpisodeTitle
    animeData['animeEpisodeTitle'] = splitCaption[0];

    // acess anime title
    var splitTitle = splitCaption[0].split(" ");
    for (let index = 0; index < splitTitle.length; index++) {
        if (splitTitle[index] === '1080p' || splitTitle[index] === '480p' || splitTitle[index] === '720p') {
            break;
        }
        animeData['title'] = `${animeData['title']} ${splitTitle[index]}`;
    }
    
    // acess episode
    var sliptsecondCaption = splitCaption[1].split('\n');
    var hasepisodeData = sliptsecondCaption[0].includes("Episode");
    if (hasepisodeData) {
        var episodeSplit = sliptsecondCaption[0].split(" ");
        if (episodeSplit.length === 3) {
            animeData['episode'] = episodeSplit[2];
        }
    }

    //acessing genre and author
    if (splitCaption.length === 3) {
        var splitedGenre = splitCaption[2].split('\n');
        for (let index = 0; index < splitedGenre.length; index++) {

            // acessing author
            if (splitedGenre[index].includes('Author')) {
                var splitAuthor = splitedGenre[index].split(" ");
                if (splitAuthor.length === 2) {
                    animeData['author'] = splitAuthor[1];
                }
            }

            // acessing genre
            if (splitedGenre[index].includes("Genre")) {
                var genersSplits = splitedGenre[index].split(" ");
                for (let j = 0; j < genersSplits.length; j++) {
                    if (genersSplits[j].includes("#")) {
                        animeData['Genre'].push(genersSplits[j]);
                    }
                }
            }
        }
    }

    // acessing link
    animeData['link'] = msg.reply_markup.inline_keyboard[0][0]['url'];

    var fetchData = await OnGoingAnimeSchema.findOne({ title: animeData['title'] });
    if (fetchData === null) {
           newAnime(animeData);
        return;
    }

    addedAnime(animeData);

}
module.exports = onGoinganime;