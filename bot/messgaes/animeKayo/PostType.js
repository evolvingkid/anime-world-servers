function postType(caption) {
    var splitCaption = caption.split("|");

    if (splitCaption.length === 3) {
        // test ongoing anime or not
        var type = splitCaption[2].includes("Ongoing")
        if (type) {
            return 'Ongoing';
        }
    }
    return 'notOngoing';
}
module.exports = postType;