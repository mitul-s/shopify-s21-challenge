import React, { useEffect } from 'react';
import MovieCard from './core/MovieCard';

import { Box, Grid } from "theme-ui";

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
              // style={{ margin: "0 auto", marginBottom: "25px" }}
              image={movie.Poster}
            >
              {/* <MovieCard.Image image={movie.Poster} /> */}
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
        return <h1>Hmm, you haven't made any nominations yet!</h1>
      }
    }

  return (
    <div>
      <h3>Nominations</h3>
      <Box
        sx={{
          minHeight: "100vh",
          height: "auto",
          padding: "25px",
          maxWidth: ""
        }}
        bg="#f4f7f6"
      >
        <Grid columns={[1]}>
        {renderNominations()}
        </Grid>
      </Box>
    </div>
  );
}

export default Nominations;