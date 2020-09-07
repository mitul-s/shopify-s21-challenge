import React from 'react';
import SearchBar from "./SearchBar";
import ToggleThemeBtn from "./core/ToggleThemeBtn";
import { Box, Heading, Container, Text, Flex, Link } from "theme-ui";

// Just cleaning up app.js component, can be refactored as a core

export default function Header({ setQuery, title }) {
    return (
          <Container as="header" bg="primary">
            <Box
              px={4}
              py={5}
              sx={{ width: ["99%", "85%", "75%"], margin: "0 auto" }}
            >
              <Flex sx={{ alignItems: "center", mb: 3 }}>
                <Box>
                  <Heading as="h1" variant="title">
                    {title}
                  </Heading>
                  <Text color="accent">
                    Movie awards for entrepreneurs –{" "}
                    <span>
                      Built by{" "}
                      <Link
                        color="white"
                        href="https://github.com/mitul-s"
                        target="_blank"
                      >
                        Mitul Shah
                      </Link>{" "}
                      <span role="img" aria-label="surfer emoji">
                        🏄‍♂️
                      </span>
                    </span>
                  </Text>
                </Box>
                <ToggleThemeBtn />
              </Flex>
              <SearchBar setQuery={setQuery} />
            </Box>
          </Container>
    );
}