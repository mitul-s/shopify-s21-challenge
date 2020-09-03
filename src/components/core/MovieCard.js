import React from 'react';
import { Box, Heading, Text, Flex, Button } from "theme-ui";

export default function MovieCard({ children, title, ...restProps }) {
    return (
        <Box {...restProps} sx={{ backgroundColor: "white", border: "1px solid red",  boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)" }}>
            {children}
        </Box>
    )
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
          '&:disabled': {
            backgroundColor: "black"
          }
        }}
        {...restProps}
      >
        {children}
      </Button>
    );
}

MovieCard.Image = function MovieCardImage({ image, ...restProps }) {
    return <Box sx={{ height: "350px", backgroundImage: `url('${image}')`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center"}}></Box>
}