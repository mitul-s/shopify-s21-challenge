import React from 'react';
import { useForm } from 'react-hook-form'
import { Box, Label, Input } from "theme-ui";

const SearchBar = ({ setQuery }) => {

    const { register, errors, } = useForm();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
      <Box as="form">
          <Label mb={1} color="#d6f8f3" htmlFor="search">
            Movie title
          </Label>
          <Input
            name="search"
            placeholder="Search for a movie to nominate..."
            ref={register({ required: true })}
            onChange={handleChange}
            bg="#ffffff"
            color="black"
            sx={{
              border: "1px solid transparent",
              outline: "none",
              transition: "150ms ease",
              "&:focus": {
                boxShadow: "0 0 0 2px #008060",
              },
            }}
          />
          {errors.search && <p>Required</p>}
      </Box>
    );
}

export default SearchBar;