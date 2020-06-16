import React from 'react';
import { Link } from 'react-router-dom';

class MainToBar extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/home">Anime World</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home">Home </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home/documentation">Documnetaion <span
                                    className="sr-only">(current)</span></Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home/documentation"> Get Started </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/home/login">
                                    login
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        );
    }

};

export default MainToBar;