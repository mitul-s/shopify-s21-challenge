import React, { useRef } from 'react';
import _ from 'lodash'
import { useForm } from 'react-hook-form'
import { Box, Label, Input } from "theme-ui";

const SearchBar = ({ setQuery }) => {

  // React hook form making life easy 
  const { register, errors } = useForm();
  
  // Added in debounce so that search doesn't happen on every keystroke!!!
  // Could make it a custom hook too
  const debounced = useRef(_.debounce(q => setQuery(q), 500), []).current;

  const handleChange = (e) => {
    debounced(e.target.value);
    // setQuery(e.target.value);
  };

  return (
    <Box as="form" onSubmit={(e) => e.preventDefault()}>
      <Label mb={1} color="highlight" htmlFor="search">
        Movie title
      </Label>
      <Input
        id="search"
        name="search"
        placeholder="Hunger Games"
        ref={register({ required: true })}
        onChange={handleChange}
        bg="background"
        color="secondaryText"
        sx={{
          border: "1px solid transparent",
          outline: "none",
          transition: "200ms ease",
          "&:focus": {
            borderColor: "outline",
          },
        }}
      />
      {errors.search && <p>Required</p>}
    </Box>
  );
}

export default SearchBar;