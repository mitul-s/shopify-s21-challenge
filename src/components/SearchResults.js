import React, { useEffect } from "react";

import MovieCard from "./core/MovieCard";
import { Grid } from "theme-ui";


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
              <Grid gap={3} columns={[3, "1fr 1fr 1fr"]} sx={{ backgroundColor:"muted", padding: "25px" }}>
                {props.results.Search.map((movie) => {
                  return (
                    <MovieCard>
                      <MovieCard.Image image={movie.Poster}></MovieCard.Image>
                      <MovieCard.ContainerB>
                        <MovieCard.Title>{movie.Title}</MovieCard.Title>
                        <MovieCard.Description>
                          Release on {movie.Year}
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

                    // <MediaCard title={movie.title} primaryAction={{ content: 'Learn' }} description='shop is cool'>
                    //   {/* <h1>{movie.Title}</h1>
                    //   <img
                    //     src={
                    //       movie.Poster !== "N/A"
                    //         ? movie.Poster
                    //         : "https://images.pexels.com/photos/954599/pexels-photo-954599.jpeg?auto=compress&cs=tinysrgb&h=350"
                    //     }
                    //   />
                    //   <p>Released on: {movie.Year}</p>
                    //   <Button
                    //     primary
                    //     size="slim"
                    // onClick={() => validateNomination(movie)}
                    // disabled={nominated.some((i) =>
                    //   i.imdbID.includes(movie.imdbID)
                    // )}
                    //   >
                    //     Nominate
                    //   </Button> */}
                    //   <h1>{movie.title}</h1>
                    // </MediaCard>
                  );
                })}
              </Grid>
            );
        } else { 
            return <div>No results found</div>
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