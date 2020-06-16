import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import DoucumnetaionBody from './Documnetation/GetStarted';
import TelegramBot from './Documnetation/telegarmBot';
import WebCrawlers from './Documnetation/WebCrawlwers';
import DiscordBot from './Documnetation/DiscordBot';

export default class DocumnetationBody extends Component {

    state = {
        GetStarted: 'nav-link active',
        telegrambot: 'nav-link',
        webcrawlers: 'nav-link',
        discordbot: 'nav-link'
    };

    onLinkClick(params) {
        switch (params) {
            case 'getStarted':
                this.setState({
                    GetStarted: 'nav-link active',
                    webcrawlers: 'nav-link',
                    telegrambot: 'nav-link',
                    discordbot: 'nav-link'
                });
                break;
            case 'telegrambot':
                this.setState({
                    GetStarted: 'nav-link',
                    webcrawlers: 'nav-link ',
                    telegrambot: 'nav-link active',
                    discordbot: 'nav-link'
                });
                break;
            case 'webcrawlers':
                this.setState({
                    GetStarted: 'nav-link',
                    webcrawlers: 'nav-link active',
                    telegrambot: 'nav-link ',
                    discordbot: 'nav-link'
                });
                break;
            case 'discordbot':
                this.setState({
                    GetStarted: 'nav-link',
                    webcrawlers: 'nav-link',
                    telegrambot: 'nav-link',
                    discordbot: 'nav-link active'
                });
                break;
            default:
                break;
        }
    }

    render() {

        return (

            <div>
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className=" col-2">
                            <div className="position-fixed nav flex-column nav-pills" id="v-pills-tab" role="tablist"
                                aria-orientation="vertical">
                                <Link className={this.state.GetStarted}
                                    to="/home/documentation"
                                    onClick={() => { this.onLinkClick('getStarted'); }} >Get Started </Link>
                                <Link className={this.state.telegrambot}
                                    to="/home/documentation/telegrambot"
                                    onClick={() => { this.onLinkClick('telegrambot'); }}
                                >Telegram Bot</Link>
                                <Link className={this.state.webcrawlers}
                                    to="/home/documentation/webcrawlers"
                                    onClick={() => { this.onLinkClick('webcrawlers'); }}
                                >Web Crawlers</Link>
                                <Link className={this.state.discordbot}
                                    to="/home/documentation/discordbot"
                                    onClick={() => { this.onLinkClick('discordbot'); }}
                                >Discord Bot</Link>

                            </div>
                        </div>
                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">

                                <Route path="/home/documentation" exact> <DoucumnetaionBody /> </Route>
                                <Route path="/home/documentation/telegrambot" exact> <TelegramBot /> </Route>
                                <Route path="/home/documentation/webcrawlers" exact> <WebCrawlers /> </Route>
                                <Route path="/home/documentation/discordbot" exact> <DiscordBot /> </Route>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
