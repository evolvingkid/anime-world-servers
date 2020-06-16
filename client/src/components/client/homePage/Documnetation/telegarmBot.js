import React, { Component } from 'react'
import { HashLink } from 'react-router-hash-link';

export default class telegarmBot extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-10">
                        <div className="container-fluid">
                            <h3>Telegram Bot</h3>
                            <div className="col" id="getStrated">
                                <hr />
                            </div>
                            <p>
                                To use our telegram bot features. Your account must be approved by us. After
                                        approving the account we can go and start the telegram bot features on. <br />
                                        Then You can add our bot to your telegram channel.<br />
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-danger">Important</h5>
                                        <p className="card-text">For the bot to start collecting your post and sent it
                                                to the anime world. You must 1st define the post format type. </p>
                                    </div>
                                </div>
                            </p>
                            <h5 className="mt-5" id="settingformat">Setting up the Post format</h5>
                            <p>
                                The default Post format is:
                                    <div className="container bg-light p-3">
                                    */ title /* | */ episode number /*<br />
                                        Category: */ Category /* | */ type /* <br />
                                        Genre: */ Genre /* <br />
                                        Author: */ Author /*<br />
                                </div>
                                <p className="mt-3">
                                    For Example:
                                    </p>

                                <div className="container bg-light p-3">
                                    Oshi ga Budoukan Ittekuretara Shinu | Episode 10<br />
                                        Category: 480p | Ongoing Anime<br />
                                        Genre: #Comedy #Music #Seinen<br />
                                        Author: Marshall<br />
                                </div>
                            </p>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Important</h5>
                                <p className="card-text">In Anime World currently we have 4 types. They are Ongoing
                                            Anime, Anime Movies, Anime Series, Anime OVA</p>
                            </div>
                        </div>

                        <div className="card mt-5 mb-5">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Important</h5>
                                <p className="card-text">If you are posting the Movies then you can put episode as
                                            null or 01 </p>
                            </div>
                        </div>

                        <h5 id="customPostType">Custom Post Type</h5>
                        <p>
                            You can put your own custom post type as you desire.
                                </p>
                    </div>
                    <div className="col-2">
                        <HashLink to="#getStrated"><button className="btn btn-link" type="button">Get
                                        Started</button>
                        </HashLink>
                        <HashLink to="#settingformat"><button className="btn btn-link" type="button">
                            Setting up the Post</button>
                        </HashLink>
                        <HashLink to="#customPostType"><button className="btn btn-link" type="button">
                            Custom Post Type</button>
                        </HashLink>
                    </div>
                </div>
            </div>

        )
    }
}
