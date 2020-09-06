import React from 'react';
import { Box, Heading, Text, Flex, Button } from "theme-ui";

export default function MovieCard({ image, children, title, ...restProps }) {
    return (
      <Box
        variant="movieCard"
        sx={{
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 255, 0.15), rgba(0, 0, 0, 0.9)), url('${
            image !== "N/A"
              ? image
              : "https://www.csa.iisc.ac.in/newweb/wp-content/uploads/2019/11/image-not-available.jpg"
          }')`,
        }}
        {...restProps}
      >
        <MovieCard.ContainerB>{children}</MovieCard.ContainerB>
      </Box>
    );
}

MovieCard.ContainerB = function MovieCardContainerB({ children, ...restProps }) {
    return <Flex sx={{ alignContent: "flex-end", justifyContent: "flex-end", flexDirection: "column", color: "white", padding: "16px", height: "inherit" }} {...restProps}>{children}</Flex>
}

MovieCard.Title = function MovieCardTitle({ children, ...restProps }) {
    return <Heading as="h3" mb={0} sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", fontWeight: "700", letterSpacing: "0.3px" }} {...restProps}>{children}</Heading>;
}

MovieCard.Description = function MovieCardDescription({ children, ...restProps }) {
    return (
      <Text
        mb={3}
        sx={{
          textTransform: "uppercase",
          fontSize: "12px",
          fontWeight: "300",
          letterSpacing: "0.4px",
        }}
        {...restProps}
      >
        {children}
      </Text>
    );
}

MovieCard.Button = function MovieCardButton({ children, ...restProps }) {
    return (
      <Button aria-label="nominate" variant="nominate" {...restProps}>
        {children}
      </Button>
    );
}