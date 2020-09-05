import React from 'react';
import { Box, Heading, Text, Flex, Button } from "theme-ui";

export default function MovieCard({ image, children, title, ...restProps }) {
    return (
      <Box
        {...restProps}
        sx={{
          backgroundColor: "white",
          borderRadius: "5px",
          // border: "1px solid red",
          boxShadow:
            "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
          width: "",
          height: ["200px", "300px"],
          backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 255, 0.25), rgba(0, 0, 0, 0.9)), url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </Box>
    );
}

MovieCard.ContainerB = function MovieCardContainerB({ children, ...restProps }) {
    return <Flex sx={{ alignContent: "flex-end", justifyContent: "flex-end", flexDirection: "column", color: "white", padding: "16px", height: "inherit" }}>{children}</Flex>
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
      <Button
        sx={{
          width: "100%",
          borderRadius: "4px",
          backgroundColor: "#008060",
          color: "white",
          transition: "150ms ease",
          "&:disabled": {
            backgroundColor: "black",
          },
          "&:hover": {
            "&:not([disabled])": {
              backgroundColor: "",
              transform: "translateY(-1.5px)"
            },
          },
        }}
        {...restProps}
      >
        {children}
      </Button>
    );
}