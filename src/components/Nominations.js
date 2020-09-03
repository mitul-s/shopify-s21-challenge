import React, { useEffect } from 'react';
import MovieCard from './core/MovieCard';

import { Box } from "theme-ui";

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

  return (
    <div>
      <h3>Nominations</h3>
      <Box sx={{
        height: "100vh",
        padding: "25px",
      }} bg="muted">
        {nominated.map((movie) => {
          return (
            <MovieCard key={movie.imdbID} mb={3}>
              <MovieCard.Image image={movie.Poster} />
              <Box p={3}>
                <MovieCard.Title>{movie.Title}</MovieCard.Title>
                <MovieCard.Description>
                  Release on {movie.Year}
                </MovieCard.Description>
                <MovieCard.Button onClick={() => deleteNomination(movie)}>
                  Remove nomination
                </MovieCard.Button>
              </Box>
            </MovieCard>
          );
        })}
      </Box>
    </div>
  );
}

export default Nominations;