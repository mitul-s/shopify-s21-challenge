import React, { useEffect } from 'react';
import MovieCard from './core/MovieCard';

import { Container, Grid, Button, Heading } from "theme-ui";
import EmptyState from './core/EmptyState';

import seventeen from "../illustrations/drawkit-grape-pack-illustration-17.svg";

const Nominations = ({ nominated, setNominated }) => {

    const deleteNomination = (movie) => {
        let validation = nominated.some((i) => i.imdbID.includes(movie.imdbID));
        if(validation) {
            let filteredNoms = nominated.filter(i => i.imdbID !== movie.imdbID)
            setNominated(filteredNoms);
        } else {
            console.log("This movie hasn't been nominated, or there's an error");
        }
    }

    const clearAllNominations = () => {
      setNominated([]);
      localStorage.removeItem("nominations");
    }

    useEffect(() => {
        localStorage.setItem("nominations", JSON.stringify(nominated));
    }, [nominated])

    const renderNominations = () => {
      if(nominated.length) {
        return nominated.map((movie) => {
          return (
            <MovieCard
              style={{ height: "180px" }}
              key={movie.imdbID}
              image={movie.Poster}
            >
              <MovieCard.ContainerB>
                <MovieCard.Title>{movie.Title}</MovieCard.Title>
                <MovieCard.Description>
                  Released in {movie.Year.substring(0,4)}
                </MovieCard.Description>
                <MovieCard.Button onClick={() => deleteNomination(movie)}>
                   Remove
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
      <Heading as="h3" color="secondaryText" mb={4}>My Nominations</Heading>
      <Container variant="coreBox">
        {nominated.length > 1 ? <Button sx={{ width:"100%", mb:3, mt:-3, p:1 }} onClick={() => clearAllNominations()}>Clear all</Button> : ""}
        <Grid columns={[1]}>{renderNominations()}</Grid>
      </Container>
    </div>
  );
}

export default Nominations;