import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GetStarted extends Component {
    render() {
        return (
            <div>

                <div className="row">
                    <div className="col-10">
                        <div className="container-fluid">
                            <h3>Get Started</h3>
                            <div className="col" id="getStrated">
                                <hr />
                            </div>
                            <p>
                                For you to add your website to the anime world app you must create an account.
                                        <br /> <br />
                                <button className="btn btn-light" type="button">Create an account</button>
                                <br /> <br />
                                        After creating your account you need to wait for admins to approve the account.
                                        It will take a maximum of 2 days. After account verification, you will be able
                                        to use our features both telegram bot and Web crawler for your website.
                                    </p>

                            <h5 id="Requirements">Requirements</h5>
                            <p>
                                The website you give in our form must be owned by you or your team.
                                    </p>
                            <h5 id="helpCenter">Help Center</h5>
                            <p>
                                If you need us to solve any issue you are facing or need to add any new feature
                                you can inform us

                                        <button className="btn btn-link" type="button">Contact Us </button>
                            </p>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <Link to="#getStrated"><button className="btn btn-link" type="button">Get
                                        Started</button></Link>
                        <Link to="#Requirements"><button className="btn btn-link" type="button">
                            Requirements</button></Link>
                        <Link to="#helpCenter"><button className="btn btn-link" type="button">
                            Help Center</button></Link>
                    </div>
                </div>
            </div>

        )
    }
}
