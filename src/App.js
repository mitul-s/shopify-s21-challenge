import React, { useState, useRef } from 'react';

// THEME UI COMPONENTS + CONFETTI
import { Message, Box, Container } from "theme-ui";
import Confetti from "react-confetti";

// INTERNAL COMPONENTS
import SearchResults from "./components/SearchResults";
import Nomintations from "./components/Nominations";
import Header from "./components/Header";

// CUSTOM HOOKS
import useConfetti from './hooks/useConfetti';
import useRequest from "./hooks/useRequest";

function App() {
  
  // CORE APP RELATED STATES
  const [ query, setQuery ] = useState("");
  const [ nominated, setNominated ] = useState([]);

  // CUSTOM HOOK TO TRIGGER CONFETTI 
  const confettiRef = useRef(null);
  const { height, width, pop, run } = useConfetti(nominated, confettiRef);

  // CUSTOM HOOK TO MAKE API REQUESTS
  const { value, loading, error } = useRequest(query);

  return (
    <Box ref={confettiRef}>
      
      <Header setQuery={setQuery} title="The Shoppies" />

      <Container p={4} sx={{ margin: "0 auto", width: ["99%", "85%", "75%"] }}>
        {nominated.length === 5 && (
          <Message mb={4}>
            Thank you for your five nominations! See you at the ceremony{" "}
            <span role="img" aria-label="smiling emoji">
              😄
            </span>
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
  