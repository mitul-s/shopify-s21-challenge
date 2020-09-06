import React, { useState, useRef } from 'react';

// THEME UI COMPONENTS + CONFETTI
import { Message, Box, Heading, Container, Text, Flex } from "theme-ui";
import Confetti from "react-confetti";

// INTERNAL COMPONENTS
import SearchBar from './components/SearchBar';
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import ToggleThemeBtn from "./components/core/ToggleThemeBtn";

// CUSTOM HOOKS
import useConfetti from './hooks/useConfetti';
import useRequest from "./hooks/useRequest";

function App() {
  
  // CORE APP RELATED STATES
  const [query, setQuery] = useState("");
  const [nominated, setNominated] = useState([]);

  // CUSTOM HOOK TO TRIGGER CONFETTI 
  const confettiRef = useRef(null);
  const { height, width, pop, run } = useConfetti(nominated, confettiRef);

  // CUSTOM HOOK TO MAKE API REQUESTS
  const { value, loading, error } = useRequest(query);

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
            Thank you for your five nominations! See you at the ceremony{" "}
            <span role="img" aria-label="smiling emoji">😄</span>
          </Message>
        )}
        <div className="with-sidebar">
          <div>
            <div className="not-sidebar">
              <SearchResults
                results={value}
                loading={loading}
                error={error}
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
  