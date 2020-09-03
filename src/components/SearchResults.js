import React, { useState, useEffect } from "react";
import Nominations from "./Nominations";

const SearchResults = (props) => {

    // const [ nomination, setNomination ] = useState([]);
    // const [ btnState, setBtnState ] = useState(false);

    const [ nominated, setNominated ] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("nominations")
        if(data) {
            setNominated(JSON.parse(data));
        } else {
            console.log("do nothing..")
        }
    }, [])

    function validateNomination(movie) {
        console.log(movie)
        if(nominated.includes(movie.imdbID)) {
            // console.log(nominated)
            alert('looks like you already nominated this dude.')
        } else {
            addNomination(movie)
        }
    }
    
    function addNomination(movie) {
        setNominated([...nominated, movie])
        localStorage.setItem("nominations", JSON.stringify([...nominated, movie]));
    }

    function renderResults() {
        if(props.results.Search !== undefined) {
            return props.results.Search.map((movie) => {
              return (
                <div key={movie.imdbID}>
                  <h1>{movie.Title}</h1>
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&h=350"
                    }
                  />
                  <p>Released on: {movie.Year}</p>
                  <button
                    onClick={() => validateNomination(movie)}
                    disabled={nominated.includes(movie.imdbID)}
                  >
                    Nominate
                  </button>
                </div>
              );
            });
        } else { 
            return <div>No results found</div>
        }
    }


    return (
        <div>
            {props.query ? <h3>Search results for {props.query}</h3> : <h3>Search for a movie!</h3>}
            {renderResults()}
        </div>
    )
}

export default SearchResults;