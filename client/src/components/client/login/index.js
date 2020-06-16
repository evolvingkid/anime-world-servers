import React, { Component } from 'react'

export default class index extends Component {
    render() {
        return (
            <div>
                <div style={{ height: "100vh" }} className="">
                    <form method="get" action=""
                        className="form-signin"
                        style={{ margin: '0 auto', width: '330px', marginTop: '10%' }}>
                        <h4 className="mb-3">Login</h4>
                        <label htmlFor="username">username:</label>
                        <input className="form-control" type="text" name="username" placeholder="Username" />
                        <label htmlFor="password" className="mt-2">Password:</label>
                        <input className="form-control" type="password" name="password" placeholder="Password" />
                        <button className="btn btn-primary mt-4" type="button">Login</button> <br /> <br />
                        <button className="btn btn-secondary" type="button">Create an account</button>
                    </form>
                </div>
            </div>
        )
    }
}
