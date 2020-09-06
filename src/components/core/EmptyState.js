import React from 'react';
import { Flex, Image, Heading, Text } from "theme-ui";

export default function EmptyState({ img, caption, txt, imgWidth, ...restProps }) {
  return (
    <Flex variant="centerBox" color="secondaryText" {...restProps}>
      <Image 
        alt="empty state illustrations"
        src={img} 
        sx={{ 
          marginBottom: "50px", 
          width: `${imgWidth}`, 
          filter: "grayscale(80%)"
        }}
      />
      <Heading as="h3" mb={2}>{txt}</Heading>
      <Text>{caption}</Text>
    </Flex>
  );
};