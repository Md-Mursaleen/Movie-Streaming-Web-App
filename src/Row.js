import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL]);
    const opts = {
        width: "100%",
        height: "390",
        playerVars: {
            autoplay: 1
        }
    };
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error) => {
                    console.log(error);
                })
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className="row-poster"
                        src={`${baseURL}${movie?.poster_path}`} alt={movies.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
