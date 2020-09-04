import React from 'react';
import { useForm } from 'react-hook-form'
import { Button, Box, Label, Input } from "theme-ui";

const SearchBar = ({ setQuery }) => {

    const { register, errors, } = useForm();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setQuery(e.target.value);
    }

    return (
      <Box as="form" onSubmit={() => handleSubmit()}>
        <Box sx={{ width: "92%", marginRight: "25px", display: "inline-block" }}>
          <Label mb={1} color="#d6f8f3" htmlFor="searchMovies">Movie title</Label>
          <Input
            name="searchMovies"
            placeholder="Search movie..."
            defaultValue="hello"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.searchMovies && <p>Required</p>}
        </Box>
        <Button sx={{ display: "inline" }}>Search</Button>
      </Box>
    );
}

export default SearchBar;