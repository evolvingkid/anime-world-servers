const animeSeries = require('./animeSeries');
const animeOVA = require('../animeOVA');
const animeMovies = require('../animeMovies');

function normalAnime(msg) {

    var animeData = {
        title: "",
        category: null,
        type: '',
        genre: [],
        channel: null,
        link: null
    };
    var captionSplit = msg['caption'].split("\n");

    // acessing aime title 
    var titleSplit = captionSplit[0].split(" ");
    for (let index = 0; index < titleSplit.length; index++) {
        if (titleSplit[index] === '1080p' || titleSplit[index] === '480p' || titleSplit[index] === '720p') {
            break;
        }
        animeData['title'] = `${animeData['title']} ${titleSplit[index]}`;
    }

    if (captionSplit.length >= 4) {

        // acesing category   
        if (captionSplit[1].includes('480p')) {
            animeData['category'] = '480p';
        }
        if (captionSplit[1].includes('720p')) {
            animeData['category'] = '720p';
        }
        if (captionSplit[1].includes('1080p')) {
            animeData['category'] = '1080p';
        }
        // acessing Type
        var typeSlipt = captionSplit[1].split("|");
        typeSlipt = typeSlipt[1].split(" ");
        for (let index = typeSlipt.length - 1; index >= 0; index--) {
            if (typeSlipt[index] === 'Anime') {
                break;
            }
            animeData['type'] = `${animeData['type']} ${typeSlipt[index]}`;
        }

        // acessing genre
        var genreSplit = captionSplit[2].split(" ");
        for (let index = 0; index < genreSplit.length; index++) {
            if (genreSplit[index].includes('#')) {
                animeData['genre'].push(genreSplit[index]);
            }
        }
    }

    // accesing channel
    animeData['channel'] = 'AnimeKayo';

    //accessing link
    animeData['link'] = msg.reply_markup.inline_keyboard[0][0]['url'];
    
    console.log(animeData);
    
    // for series
    if (animeData['type'] === ' Series') {
        animeSeries(animeData);
        return;
    }
    if (animeData['type'] === ' OVA') {
        animeOVA(animeData);
        return;
    }
    if (animeData['type'] === ' Movie') {
        animeMovies(animeData);
        return;
    }

}
module.exports = normalAnime;