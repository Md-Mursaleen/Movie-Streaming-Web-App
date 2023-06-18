import React from "react";
import "./WatchonTV.css";

function WatchonTV() {
    return (
        <div className="watchontv">
            <div className="watchontv-contents">
                <div className="watchontv-text">
                    <h1 className="watchontv-text-title">Enjoy on your TV.</h1>
                    <h2 className="watchontv-text-description">Watch on smart TVs, PlayStation, Xbox,
                        <br />
                        Chromecast, Apple TV, Blu-ray players and
                        more.</h2>
                </div>
                <div className="watchontv-animation">
                    <video autoPlay
                        playsInline
                        muted
                        loop>
                        <source
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
    );
}

export default WatchonTV;
