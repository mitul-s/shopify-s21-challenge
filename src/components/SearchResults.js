import React, { useEffect } from "react";

import MovieCard from "./core/MovieCard";
import { Grid, Box } from "theme-ui";

import { AiOutlinePlus } from "react-icons/ai";

import one from "../illustrations/drawkit-grape-pack-illustration-1.svg";
import seven from "../illustrations/drawkit-grape-pack-illustration-7.svg";
import EmptyState from "./core/EmptyState";


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
                columns={[1, 2, 2, 3]}
              >
                {props.results.Search.map((movie) => {
                  return (
                    <MovieCard image={movie.Poster}>
                      <MovieCard.ContainerB>
                        <MovieCard.Title>{movie.Title}</MovieCard.Title>
                        <MovieCard.Description>
                          Released in {movie.Year.substring(0, 4)}
                        </MovieCard.Description>
                        <MovieCard.Button
                          onClick={() => validateNomination(movie)}
                          disabled={
                            nominated.some(
                              (i) =>
                                i.imdbID.includes(movie.imdbID) ||
                                nominated.length === 5
                            ) && true
                          }
                        >
                          Nominate{" "}
                          <AiOutlinePlus/>
                        </MovieCard.Button>
                      </MovieCard.ContainerB>
                    </MovieCard>
                  );
                })}
              </Grid>
            );
        } else { 
            return (
              <Box>
                {props.query.length >= 3 && props.results.Error ? (
                  <EmptyState 
                    img={seven} 
                    imgWidth="40%"
                    txt="No movie found"
                    caption="We can't find a movie with that title, try another?" 
                  />
                ) : (
                  <EmptyState
                    img={one}
                    imgWidth="40%"
                    txt="Find a movie to nominate"
                    caption="Try using the search bar above to find movies"
                  />
                )}
              </Box>
            );
        }
    }


    return (
      <div>
        {props.query ? (
          <h3>Results for "{props.query}"</h3>
        ) : (
          <h3>Search for a movie</h3>
        )}
        <Box sx={{ padding: "3rem 2rem", bg: "#f2f2f2" }}>{renderResults()}</Box>
      </div>
    );
}

export default SearchResults;