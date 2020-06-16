const postType = require('./animeKayo/PostType');
const onGoinganime = require('./animeKayo/OnGoingAnimes');
const normalAnime = require('./animeKayo/normalAnime');

function animeKayoPostManager(msg) {
    // console.log(msg.caption);
    var type = postType(msg.caption);
    if (type === 'Ongoing') {
        onGoinganime(msg);
    }
    normalAnime(msg);
}

module.exports = animeKayoPostManager;