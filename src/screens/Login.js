import React, { useState } from 'react';
import './Login.css';
import Signup from './Signup';
import WatchonTV from '../WatchonTV';
import DownloadShows from '../DownloadShows';
import WatchAnyWhere from '../WatchAnywhere';
import CreateProfile from '../CreateProfile';
import Footer from '../Footer';

function Login() {
    const [signin, setSignin] = useState(false);
    return (
        <div className="login">
            <div className="login-background" >
                <img
                    className="login-logo"
                    src={require("../../src/assets/netflix-logo.png")} alt="Login Background" />
                <button className="login-button" onClick={() => setSignin(true)}>Sign In</button>
                <div className="login-gradient" />
            </div >
            <div className="login-contents">
                {signin ? (
                    <Signup />
                ) : (
                    <>
                        <h1>Unlimited movies, TV <br />
                            shows and more.</h1>
                        <h2>Watch anywhere, Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login-input">
                            <form>
                                <input type="email" placeholder="Email address" />
                            </form>
                            <button className="login-getstarted" onClick={() => setSignin(true)}>Get Started</button>
                        </div>
                    </>
                )
                }
            </div >
            <WatchonTV />
            <DownloadShows />
            <WatchAnyWhere />
            <CreateProfile />
            <Footer />
        </div >
    );
}

export default Login;
