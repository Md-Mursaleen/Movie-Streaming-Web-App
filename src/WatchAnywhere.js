import React from "react";
import "./WatchAnywhere.css";

function WatchAnywhere() {
    return (
        <div className="watchanywhere">
            <div className="watchanywhere-contents">
                <div className="watchanywhere-image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="WatchonAnywhere" />
                </div>
                <div className="watchanywhere-text">
                    <h1 className="watchanywhere-text-title">Watch everywhere.</h1>
                    <h2 className="watchanywhere-text-description">Stream unlimited movies and TV shows on
                        <br />
                        your phone, tablet, laptop, and TV.</h2>
                </div>
            </div>
        </div>
    );
}

export default WatchAnywhere;
