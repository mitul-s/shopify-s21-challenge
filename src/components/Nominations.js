import React, { useEffect } from 'react';

import MovieCard from './core/MovieCard';
import EmptyState from "./core/EmptyState";

import { Container, Grid, Button, Heading } from "theme-ui";

import seventeen from "../illustrations/drawkit-grape-pack-illustration-17.svg";

const Nominations = ({ nominated, setNominated }) => {

  // Check if nomination exists, and then delete it from state
    const deleteNomination = (movie) => {
        let validation = nominated.some((i) => i.imdbID.includes(movie.imdbID));
        if(validation) {
            let filteredNoms = nominated.filter(i => i.imdbID !== movie.imdbID)
            setNominated(filteredNoms);
        } else {
            console.log("This movie hasn't been nominated, or there's an error");
        }
    }

    // delete all nominations from state and localstorage
    const clearAllNominations = () => {
      setNominated([]);
      localStorage.removeItem("nominations");
    }

    // Re-update the nominations in local storage
    useEffect(() => {
        localStorage.setItem("nominations", JSON.stringify(nominated));
    }, [nominated])


    // render nominations if they exist, if not then empty state
    const renderNominations = () => {
      if(nominated.length) {
        return nominated.map((movie) => {
          return (
            <MovieCard
              style={{ height: "180px" }}
              key={movie.imdbID}
              image={movie.Poster}
              alt="movie poster"
            >
              <MovieCard.Title>{movie.Title}</MovieCard.Title>
              <MovieCard.Description>
                Released in {movie.Year.substring(0, 4)}
              </MovieCard.Description>
              <MovieCard.Button
                aria-label="delete nomination"
                onClick={() => deleteNomination(movie)}
              >
                Remove
              </MovieCard.Button>
            </MovieCard>
          );
        });
      } else {
        return (
          <EmptyState 
            img={seventeen} 
            imgWidth="60%" 
            txt="Make a nomination" 
            caption="Any movie nominations you make will appear here."
          />
        )
      }
    }

  return (
    <div>
      <Heading as="h2" variant="subHeading">
        My Nominations
      </Heading>
      <Container variant="coreBox">
        {nominated.length > 1 ? (
          <Button
            aria-label="clear nominations"
            sx={{ width: "100%", mb: 3, mt: -3, p: 1 }}
            onClick={() => clearAllNominations()}
          >
            Clear all
          </Button>
        ) : (
          ""
        )}
        <Grid columns={[1]}>{renderNominations()}</Grid>
      </Container>
    </div>
  );
}

export default Nominations;