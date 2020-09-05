import React, { useEffect } from 'react';
import MovieCard from './core/MovieCard';

import { Box, Grid } from "theme-ui";
import EmptyState from './core/EmptyState';

import seventeen from "../illustrations/drawkit-grape-pack-illustration-17.svg";

const Nominations = ({ nominated, setNominated }) => {

    const deleteNomination = (movie) => {
        let validation = nominated.some((i) => i.imdbID.includes(movie.imdbID));
        if(validation) {
            console.log(localStorage.getItem("nominations"));
            let filteredNoms = nominated.filter(i => i.imdbID !== movie.imdbID)
            setNominated(filteredNoms);
        } else {
            console.log("This movie hasn't been nominated, or there's an error");
        }
    }

    useEffect(() => {
        localStorage.setItem("nominations", JSON.stringify(nominated));
    }, [nominated])

    const renderNominations = () => {
      if(nominated.length) {
        return nominated.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              image={movie.Poster}
            >
              <MovieCard.ContainerB>
                <MovieCard.Title>{movie.Title}</MovieCard.Title>
                <MovieCard.Description>
                  Released in {movie.Year.substring(0,4)}
                </MovieCard.Description>
                <MovieCard.Button onClick={() => deleteNomination(movie)}>
                   Remove nomination
                </MovieCard.Button>
              </MovieCard.ContainerB>
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
      <h3>My Nominations</h3>
      <Box
        sx={{
          height: "auto",
          padding: "3rem 2rem",
          maxWidth: "",
        }}
        bg="#f2f2f2"
      >
        <Grid columns={[1]}>{renderNominations()}</Grid>
      </Box>
    </div>
  );
}

export default Nominations;