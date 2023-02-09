import React, { useEffect, useState } from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Cards from "../Components/Card/Card"


const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=c5f51b2b883f97907e200069a85d9e93&language=en-US`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title" style={{ color: "white" }}>{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        // <Cards movie={movie} />
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList