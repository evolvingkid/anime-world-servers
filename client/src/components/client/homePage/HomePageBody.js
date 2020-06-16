import React from 'react';

class App extends React.Component {

    render() {
        return (
            <div>
                <div className="row" style={{ overflow: 'none' }}>
                    <div className=" col-lg-6 homeColMain">
                        <div className="d-flex h-100 flex-column m-4">
                            <div className="d-flex justify-content-center w-100 marginHome">
                                <h4 className="">Welcome to Anime World</h4>
                            </div>
                            <div className="d-flex justify-content-center w-100 text-center">
                                Why looking through all search engines
                                if you can find all  anime in one place
                    </div>

                            <div className="d-flex justify-content-center m-4">
                                <button className="btn btn-light" style={{ width: '200px' }} type="button">Install our App</button>
                            </div>


                        </div>
                    </div>
                    <div className="col-lg-6 homePageCover">

                    </div>
                </div>

                <div className="container text-center">
                    <h4 className="mt-5">
                        How we works
            </h4>
                    <div className="d-flex justify-content-center mt-3 mb-5">
                        <p className="w-75 ">
                            we have or web crawler and telegram bot to collect to the data to our server. Telegram bot is added
                            to
                            particular channels to keep in check that all the newly released anime can be collected. Our web
                            crawlers crawl the websites once a week so any update in data can be recorded. If you guys still
                            didn't
                            get what you are looking for in all these websites then we have other options. we also provide
                            torrent
                            links too.
                </p>
                    </div>

                </div>


                <div className="container-fluid bg-light p-3 text-center">
                    <div className="container text-center mt-5">
                        <h4>Need to added your website and telegram channel to anime World?</h4>
                        <p className="mt-4">
                            You can added your website and telegram channel to anime world and can manage easily to.  </p>
                        <a href="/home/documentation">    <button className="btn btn-dark mb-5" type="button">Get Started</button></a>
                    </div>
                </div>

                <div className="container mt-5 p-5">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title text-center">Our Telegram Bot</h5>
                            <div className="container w-75">
                                <div className="col">
                                    <hr />
                                </div>
                                <p className="card-text">
                                    You can Get started with our telegram bot by simply added it to your
                                    channel.
                                    After that please define the msg layout of content you post on your telegram channel by this
                                    the
                                    bot can define in which manner the content in display on your channel.
                        </p>
                                <a href="/home/documentation/telegrambot">  <button className="btn btn-light" type="button">Get Started</button></a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bg-dark p-2 text-light text-center">
                    Made with Code by evolvingkid
        </div>
            </div>
        );
    }

};

export default App;