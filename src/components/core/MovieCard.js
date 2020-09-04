import React from 'react';
import { Box, Heading, Text, Flex, Button } from "theme-ui";

export default function MovieCard({ children, title, ...restProps }) {
    return (
      <Box
        {...restProps}
        sx={{
          backgroundColor: "white",
          borderRadius: "3px",
          boxShadow:
            "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
          width: "280px",
        }}
      >
        {children}
      </Box>
    );
}

MovieCard.ContainerB = function MovieCardContainerB({ children, ...restProps }) {
    return <Flex sx={{ alignItems: "flex-start", justifyContent: "center", flexDirection: "column", height: "150px", padding: "25px"}}>{children}</Flex>
}

MovieCard.Title = function MovieCardTitle({ children, ...restProps }) {
    return <Heading as="h3" mb={2} {...restProps}>{children}</Heading>;
}

MovieCard.Description = function MovieCardDescription({ children, ...restProps }) {
    return (
      <Text mb={2} {...restProps}>
        {children}
      </Text>
    );
}

MovieCard.Button = function MovieCardButton({ children, ...restProps }) {
    return (
      <Button
        sx={{
          width: "100%",
          borderRadius: "5px",
          '&:disabled': {
            backgroundColor: "black"
          },
          '&:hover': {
            '&:not([disabled])':{
              backgroundColor: "secondary", 
            }
          },
        }}
        {...restProps}
      >
        {children}
      </Button>
    );
}

MovieCard.Image = function MovieCardImage({ image, ...restProps }) {
    return (
      <Box
        sx={{
          height: "350px",
          backgroundImage: `url('${image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: "3px",
          borderTopRightRadius: "3px",
        }}
        {...restProps}
      ></Box>
    );
}