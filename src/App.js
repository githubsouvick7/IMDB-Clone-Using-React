import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css"
import Header from "./Components/Header/Header"
import MovieList from './MovieList/MovieList'
import Home from './Pages/Home/Home'
import MovieDetails from './Pages/MovieDetails/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>404 Error</h1>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App 
