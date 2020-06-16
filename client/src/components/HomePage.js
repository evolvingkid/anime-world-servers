import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MainNavBar from './nav/MainTopBar';
import HomeRediect from './root';
import HomePageBody from './client/homePage/HomePageBody';
import DocumentationBody from './client/homePage/DocumnetationBody';
import LoginPage from './client/login';
import WaterMark from './WaterMark';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact> <HomeRediect /> </Route>
                    <Route path="/"> <WaterMark /> </Route>
                    <Route path="/home"> <MainNavBar /> </Route>
                    <Route path="/home" exact> <HomePageBody /> </Route>
                    <Route path="/home/documentation"> <DocumentationBody /> </Route>
                    <Route path="/home/login"> <LoginPage /> </Route>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;