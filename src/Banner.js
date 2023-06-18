import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return requestAnimationFrame;
        }
        fetchData();
    }, []);
    console.log(movie);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }
    return (
        <header className="banner" style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }
        }>
            <div className="banner-contents">
                <h1 className="banner-title">{truncate(movie?.name, 30) || truncate(movie?.title, 30) || truncate(movie?.original_name, 30)}</h1>
                <div className="banner-buttons">
                    <button className="banner-button">Play</button>
                    <button className="banner-button">My List</button>
                    <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
                </div>
            </div>
            <div className="banner-fadebottom" />
        </header>
    );
}

export default Banner;
