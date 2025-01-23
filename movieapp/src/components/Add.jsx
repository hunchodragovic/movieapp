import React, { useState, useEffect } from "react";
import "./Add.css";
import axios from "axios";
import ResultCard from "./ResultCard";
const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  // Debounce input to reduce API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500); // Delay for 500ms

    return () => clearTimeout(handler);
  }, [searchValue]);

  // Fetch movies when debounced value changes
  useEffect(() => {
    if (debouncedSearchValue.trim() === "") {
      setMovies([]); // Clear movies if input is empty
      return;
    }

    axios
      .get(
        `https://www.omdbapi.com/?s=${debouncedSearchValue}&apikey=afaeaf97`
      )
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((error) => console.log(error));
  }, [debouncedSearchValue]);

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                 
                  {<ResultCard movie={movie}/>}
                  
                </li>
              ))}
            </ul>
          ) }
        </div>
      </div>
    </div>
  );
};

export default Add;
