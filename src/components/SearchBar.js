import React from 'react';
import { useForm } from 'react-hook-form'
import { Box, Label, Input } from "theme-ui";

const SearchBar = ({ setQuery }) => {

    const { register, errors, } = useForm();

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return (
        <Box
          as="form"
          // onSubmit={handleSubmit(searchMovies)}
        >
          <Label htmlFor="searchMovies">Movie title</Label>
          <Input
            name="searchMovies"
            placeholder="Search movie..."
            defaultValue="hello"
            ref={register({ required: true })}
            onChange={handleChange}
          />
          {errors.searchMovies && <p>Required</p>}
          {/* <Button>Search</Button> */}
        </Box>
    );
}

export default SearchBar;