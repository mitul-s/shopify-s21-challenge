import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

import './index.css';

import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";

import { Message, Box, Heading, Container, Text, IconButton, useColorMode, Flex } from "theme-ui";

import Confetti from 'react-confetti';

function App() {
  
  // CORE APP RELATED STATES
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [nominated, setNominated] = useState([]);

  // TOGGLE APP THEME HOOK
  const [ colorMode, setColorMode ] = useColorMode();

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
      <Container bg="primary">
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
            <IconButton
              variant="iconBtn"
              ml="auto"
              onClick={(e) => {
                setColorMode(colorMode === "default" ? "dark" : "default");
              }}
            >
              {colorMode === "default" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M5.764 8l-.295-.73a1 1 0 0 1 .553-1.302l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L11 20.96V21H7a1 1 0 0 1-1-1v-.27l-3.35-1.353a1 1 0 0 1-.552-1.302L5.764 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054 7.418-2.997-4.87-12.053-7.418 2.996zm2.978 2.033a1 1 0 1 1-.749-1.855 1 1 0 0 1 .75 1.855z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M4 18.922l-1.35-.545a1 1 0 0 1-.552-1.302L4 12.367v6.555zM8.86 21H7a1 1 0 0 1-1-1v-6.078L8.86 21zM6.022 5.968l9.272-3.746a1 1 0 0 1 1.301.552l5.62 13.908a1 1 0 0 1-.553 1.302L12.39 21.73a1 1 0 0 1-1.302-.553L5.47 7.27a1 1 0 0 1 .553-1.301zM9 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              )}
            </IconButton>
          </Flex>
          <SearchBar setQuery={setQuery} />
        </Box>
        <Confetti
          numberOfPieces={600}
          recycle={pop}
          run={run}
          width={width}
          height={height}
        />
      </Container>

      <Container p={4} sx={{ margin: "0 auto", width: ["99%", "85%", "75%"] }}>
        {nominated.length === 5 && (
          <Message mb={4}>You've nominated 5 movies!</Message>
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
    </Box>
  );
}

export default App;
  