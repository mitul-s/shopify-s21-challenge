import React, { useEffect } from "react";

import MovieCard from "./core/MovieCard";
import EmptyState from "./core/EmptyState";
import { Grid, Box, Container, Heading, Spinner, Flex } from "theme-ui";

// Empty state illustrations
import one from "../illustrations/drawkit-grape-pack-illustration-1.svg";
import seven from "../illustrations/drawkit-grape-pack-illustration-7.svg";


const SearchResults = ({ nominated, setNominated, ...props }) => {

  // If setNominations is run, update nominations local storage as well 
    useEffect(() => {
        let data = localStorage.getItem("nominations")
        if(data) {
            setNominated(JSON.parse(data));
        } else {
            console.log("do nothing..")
        }
    }, [setNominated])

    // Validate if movie is already included in nominations
    function validateNomination(movie) {
        let checkNominations = nominated.some((i) => i.imdbID.includes(movie.imdbID));
        if(checkNominations) {
            // This alert should never appear due to disable button
            alert('Hm, looks like you already nominated this dude.')
        } else {
            addNomination(movie)
        }
    }
    
    // Add a nomination to state and local storage
    function addNomination(movie) {
        setNominated([...nominated, movie])
        localStorage.setItem("nominations", JSON.stringify([...nominated, movie]));
    }

    function renderResults() {
      if(props.loading === true) {
        return (
          <Flex variant="centerBox">
            <Spinner />
          </Flex>
        );
      } else if(props.results.Search !== undefined) {
        // If API has provided good response, render items
        return (
          <Grid
            gap={3}
            columns={[1, 2, 2, 3]}
          >
            {props.results.Search.map((movie) => {
              return (
                <MovieCard key={movie.imdbID} image={movie.Poster} alt="movie poster">
                    <MovieCard.Title>{movie.Title}</MovieCard.Title>
                    <MovieCard.Description>
                      Released in {movie.Year.substring(0, 4)}
                    </MovieCard.Description>
                    <MovieCard.Button
                      aria-label="nominate"
                      onClick={() => validateNomination(movie)}
                      disabled={
                        nominated.some(
                          (i) =>
                            i.imdbID.includes(movie.imdbID) ||
                            nominated.length === 5
                        ) && true
                      }
                    >
                      Nominate
                    </MovieCard.Button>
                </MovieCard>
              );
            })}
          </Grid>
        )
      } else if(!props.results.Error && props.error) {
        return <Heading color="primary">Hm, looks like there was an API error. Refresh and try again.</Heading>
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
          <Heading as="h2" variant="subHeading">
            Results for "{props.query}"
          </Heading>
        ) : (
          <Heading as="h2" variant="subHeading">
            Search results
          </Heading>
        )}
        <Container variant="coreBox">
         {renderResults()}
        </Container>
      </div>
    );
}

export default SearchResults;