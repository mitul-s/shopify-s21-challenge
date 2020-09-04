import React, { useEffect } from "react";

import MovieCard from "./core/MovieCard";
import { Grid, Box } from "theme-ui";


const SearchResults = ({ nominated, setNominated, ...props }) => {

    useEffect(() => {
        let data = localStorage.getItem("nominations")
        if(data) {
            setNominated(JSON.parse(data));
        } else {
            console.log("do nothing..")
        }
    }, [setNominated])

    function validateNomination(movie) {

        let checkNominations = nominated.some((i) => i.imdbID.includes(movie.imdbID));
        if(checkNominations) {
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
            return (
              <Grid
                gap={3}
                columns={[3, "1fr 1fr 1fr"]}
                sx={{ backgroundColor: "#f4f7f6", padding: "25px" }}
              >
                {props.results.Search.map((movie) => {
                  return (
                    <MovieCard>
                      <MovieCard.Image image={movie.Poster}></MovieCard.Image>
                      <MovieCard.ContainerB>
                        <MovieCard.Title>{movie.Title}</MovieCard.Title>
                        <MovieCard.Description>
                          Released on {movie.Year}
                        </MovieCard.Description>
                        <MovieCard.Button
                          onClick={() => validateNomination(movie)}
                          disabled={nominated.some((i) =>
                            i.imdbID.includes(movie.imdbID)
                          )}
                        >
                          Nominate
                        </MovieCard.Button>
                      </MovieCard.ContainerB>
                    </MovieCard>
                  );
                })}
              </Grid>
            );
        } else { 
            return (
              <Box sx={{ backgroundColor: "muted", padding: "25px", height: "100vh" }}>
                No results found
              </Box>
            );
        }
    }


    return (
      <div>
        {props.query ? (
          <h3>Results for "{props.query}"</h3>
        ) : (
          <h3>Search for a movie!</h3>
        )}
        <div>{renderResults()}</div>
      </div>
    );
}

export default SearchResults;