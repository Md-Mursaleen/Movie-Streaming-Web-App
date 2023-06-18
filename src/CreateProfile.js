import React from "react";
import "./CreateProfile.css";

function CreateProfile() {
    return (
        <div className="createprofile">
            <div className="createprofile-contents">
                <div className="createprofile-image">
                    <img src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="CreateProfile" />
                </div>
                <div className="createprofile-text">
                    <h1 className="createprofile-text-title">Create profiles for
                        <br />
                        children.</h1>
                    <h2 className="createprofile-text-description">Send children on adventures with their
                        <br />
                        favourite characters in a space made just for
                        <br />
                        them—free with your membership.</h2>
                </div>
            </div>
        </div>
    );
}

export default CreateProfile;
