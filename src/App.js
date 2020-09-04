import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import { Message, Box, Heading, Container } from "theme-ui";

import Confetti from 'react-confetti';

function App() {
  
  const [query, setQuery] = useState("fear");
  const [results, setResults] = useState([]);
  const [ nominated, setNominated ] = useState([]);


  // CONFETTI 
  const [ height, setHeight ] = useState(null);
  const [ width, setWidth ] = useState(null);
  const [ pop, setPop ] = useState(false);
  const [ run, setRun ] = useState(false);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

    useEffect(() => {
      if (nominated.length === 5) {
        setRun(true);
        setPop(true);
        setTimeout(() => {
          setPop(false);
        }, 5000);
      }
    }, [nominated]);


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




  return (
    <Box ref={confettiRef}>
      <Container bg="#054a49">
        <Box
          p={4}
          color="white"
          sx={{ width: ["95%", "85%", "75%"], margin: "0 auto" }}
        >
          <Heading as="h1" mb={3}>
            The Shoppies
          </Heading>
          <SearchBar setQuery={setQuery} />
        </Box>
        <Confetti
          numberOfPieces={500}
          recycle={pop}
          run={run}
          width={width}
          height={height}
        />
      </Container>
      <Container p={4} sx={{ margin: "0 auto", width: ["95%", "85%", "75%"] }}>
        {nominated.length === 5 && (
          <Message>You've nominated 5 movies!</Message>
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
  