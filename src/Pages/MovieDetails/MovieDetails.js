import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./MovieDetails.css"

const MovieDetails = () => {

    const [currMovie, setCurrMovie] = useState();
    const { id } = useParams();

    useEffect(() => {
        getData();
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c5f51b2b883f97907e200069a85d9e93&language=en-US`)
            .then(res => res.json())
            .then(data => setCurrMovie(data))
    }

    return (

        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currMovie ? currMovie.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currMovie ? currMovie.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currMovie ? currMovie.original_title : ""}</div>
                        <div className="movie__tagline">{currMovie ? currMovie.tagline : ""}</div>
                        <div className="movie__rating">
                            {currMovie ? currMovie.vote_average : ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{currMovie ? "(" + currMovie.vote_count + ") votes" : ""}</span>
                        </div>
                        <div className="movie__runtime">{currMovie ? currMovie.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currMovie ? "Release date: " + currMovie.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                currMovie && currMovie.genres
                                    ?
                                    currMovie.genres.map(genre => (
                                        <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{currMovie ? currMovie.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    currMovie && currMovie.homepage && <a href={currMovie.homepage} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    currMovie && currMovie.imdb_id && <a href={"https://www.imdb.com/title/" + currMovie.imdb_id} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    currMovie && currMovie.production_companies && currMovie.production_companies.map(company => (
                        <>
                            {
                                company.logo_path
                                &&
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieDetails