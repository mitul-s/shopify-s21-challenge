import React, { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import { Box, Heading, Container } from "theme-ui";

function App() {
  
  const [query, setQuery] = useState("hello");
  const [results, setResults] = useState([]);
  const [ nominated, setNominated ] = useState([]);



  useEffect(() => {
      async function getMovies() {
        const url = `https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_API_KEY}`;

        try {
          const res = await axios(url);
          console.log(res.data);
          setResults(res.data);
        } catch (error) {
          console.log(error);
        }
      }

      getMovies();
  }, [query]);


  useEffect(() => {
    if(nominated.length >= 5){
      alert('yay')
    }
  })

  return (
    <Box>
      <Container bg="#00044C">
        <Box p={4} color="white" sx={{ width: "75%", margin: "0 auto" }}>
          <Heading as="h1" mb={3}>
            The Shoppies
          </Heading>
          <SearchBar setQuery={setQuery} />
        </Box>
      </Container>
      <Container p={4} sx={{ margin: "0 auto", width: "75%" }}>
        <div className="with-sidebar">
          <div>
            <div className="not-sidebar">
              <SearchResults
                results={results}
                query={query}
                setNominated={setNominated}
                nominated={nominated}
              />
            </div>
            <div className="sidebar">
              <Nomintations setNominated={setNominated} nominated={nominated} />
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
}

export default App;
  