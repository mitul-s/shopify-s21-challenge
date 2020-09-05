import React from 'react';
import { Flex, Image, Heading, Text } from "theme-ui";

export default function EmptyState({ img, caption, txt, imgWidth, ...restProps }) {
  return (
    <Flex sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", flexDirection: "column" }} {...restProps}>
      <Image src={img} sx={{ marginBottom: "50px", width: `${imgWidth}`, filter: "grayscale(80%)"}}/>
      <Heading as="h3" mb={2}>{txt}</Heading>
      <Text mb={4}>{caption}</Text>
    </Flex>
  );
};