import React, { useEffect } from 'react';
import MovieCard from './core/MovieCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

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
      <Box
        sx={{
          minHeight: "100vh",
          height: "auto",
          padding: "25px",
        }}
        bg="#f4f7f6"
      >
        {nominated.map((movie) => {
          return (
            <MovieCard
              key={movie.imdbID}
              style={{ margin: "0 auto", marginBottom: "25px" }}
            >
              <MovieCard.Image image={movie.Poster} />
              <MovieCard.ContainerB>
                <MovieCard.Title>{movie.Title}</MovieCard.Title>
                <MovieCard.Description>
                  Release on {movie.Year}
                </MovieCard.Description>
                <MovieCard.Button onClick={() => deleteNomination(movie)}>
                  <FontAwesomeIcon icon={faTimesCircle} /> Remove nomination
                </MovieCard.Button>
              </MovieCard.ContainerB>
            </MovieCard>
          );
        })}
      </Box>
    </div>
  );
}

export default Nominations;