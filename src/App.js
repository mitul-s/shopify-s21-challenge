import React, { useState, useEffect } from 'react';
import axios from "axios";

import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import { Box, Heading, Container } from "theme-ui";

function App() {

  const [ query, setQuery ] = useState("");
  const [ results, setResults ] = useState([]);

  async function getMovies() {
    const url = `https://www.omdbapi.com/?s=${query}&apikey=ce42f103`;

    try {
      const res = await axios(url);
      console.log(res.data);
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [query]);

  return (
    <Container p={4}>
      <Heading as="h1">The Shoppies</Heading>
      <SearchBar setQuery={setQuery} />
      <SearchResults 
        results={results} 
        query={query} 
        // setNominated={setNominated} 
        // nominated={nominated} 
      />
      <Nomintations 
        // setNominated={setNominated} 
        // nominated={nominated} 
      />
    </Container>
  );
}

export default App;
