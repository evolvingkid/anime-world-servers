const express = require('express');
const app = express();

const bot = require('./config/bot');
const connectDB = require('./config/db');
const postControler = require('./bot/messgaes/PostController');

var cors = require('cors');


app.use(cors());
connectDB();

app.use(express.json({
    extended: false
}));

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/admins', require('./api/Admin'));

app.use('/api/onGoinganime', require('./api/onGoinAnime'));

app.use('/api/animeSeries', require('./api/animeSeries'));

app.use('/api/animeMovies', require('./api/animeMovies'));

app.use('/api/animeOVA', require('./api/animeOVA'));

app.use('/api/animeTrending', require('./api/animeTrending'));

app.use('/api/search', require('./api/searchList'));

app.use('/api/horriblesub', require('./api/horribleSub'))

// * this is will all bot channel post get
bot.on('channel_post', (msg) => {
    postControler(msg);
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server starts on  ${PORT}`));