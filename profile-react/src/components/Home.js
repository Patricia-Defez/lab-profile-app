import React from 'react';
import {Link} from 'react-routes-dom';
 
export default () => {

    return (
        <div className="container mx-auto">
            <div className="row">
                <div className="col-6">
                    <h2>IronProfile</h2>
                    <p className="lead">Today we will create an app with authorization, adding some cool styles!</p>
                    <Link className="btn" to="/register">Sign up</Link>
                    <Link className="btn" to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
 
}