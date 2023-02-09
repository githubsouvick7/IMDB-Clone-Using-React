import React from 'react'
import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerleft">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}><h1>IMDB</h1></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none", color: "white", fontSize: "24px" }}><span>Populer</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none", color: "white", fontSize: "24px" }}><span>Top-Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none", color: "white", fontSize: "24px" }}> <span>Upcoming</span></Link >
            </div >
        </div >
    )
}
export default Header