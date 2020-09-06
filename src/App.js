import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import ToggleThemeBtn from "./components/core/ToggleThemeBtn";

import { Message, Box, Heading, Container, Text, Flex } from "theme-ui";

import Confetti from 'react-confetti';

function App() {
  
  // CORE APP RELATED STATES
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [nominated, setNominated] = useState([]);

  // CONFETTI STATES
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [pop, setPop] = useState(false);
  const [run, setRun] = useState(false);
  const confettiRef = useRef(null);

  // SETTING CONFETTI CONTAINER
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, []);

  // WATCHING NOMINATED ARRAY TO POP CONFETTI
  useEffect(() => {
    if (nominated.length === 5) {
      setRun(true);
      setPop(true);
      setTimeout(() => {
        setPop(false);
      }, 5000);
    }
  }, [nominated]);

  // GETTING MOVIES DEPENDING QUERY INPUT
  useEffect(() => {
    async function getMovies() {
      
      // API REQUEST FOR MOVIES ONLY WITH QUERY
      const url = `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`;
      
      // GET MOVIES
      try {
        const res = await axios(url);
        setResults(res.data);
      } catch (error) {
        console.log("There was an API error:" + error);
      }
    }
    getMovies();
  }, [query]);

  return (
    <Box ref={confettiRef}>
      <Container as="header" bg="primary">
        <Box
          px={4}
          py={5}
          color="white"
          sx={{ width: ["99%", "85%", "75%"], margin: "0 auto" }}
        >
          <Flex sx={{ alignItems: "center", mb: 3 }}>
            <Box>
              <Heading as="h1" variant="title">
                The Shoppies
              </Heading>
              <Text color="accent">Movie awards for entrepreneurs</Text>
            </Box>
            <ToggleThemeBtn />
          </Flex>
          <SearchBar setQuery={setQuery} />
        </Box>
      </Container>

      <Container p={4} sx={{ margin: "0 auto", width: ["99%", "85%", "75%"] }}>
        {nominated.length === 5 && (
          <Message mb={4}>
            And that's it! Thank you for your five nominations.
          </Message>
        )}
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
      <Confetti
        numberOfPieces={600}
        recycle={pop}
        run={run}
        width={width}
        height={height}
      />
    </Box>
  );
}

export default App;
  