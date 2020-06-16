const animeKayoPostManager = require('./animeKayoPostManagers');

function postControler(msg) {
    // TODO: remove this log when production
    //console.log(msg);

    // * grps from direct msg
    if (msg.chat !== undefined) {
        //! this if need or error will occur
        if (msg.chat.username === 'AnimeKayo') {  
            // * exclusive for anime kayo
            animeKayoPostManager(msg);
            return ; 
        }
       
    }

    // *grps from forward msg
    if ( msg.forward_from_chat !== undefined) {
        //! this if need or error will occur
        if (msg.forward_from_chat.title === 'AnimeKayo') {
            // * exclusive for anime kayo
            animeKayoPostManager(msg);
        }
    }

}
module.exports = postControler;