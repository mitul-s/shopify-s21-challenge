import React from 'react';
import { useForm } from 'react-hook-form'
import { Box, Label, Input, Button } from "theme-ui";


const SearchBar = (props) => {

    const { register, errors, } = useForm();

    const handleChange = (e) => {
        props.setQuery(e.target.value)
    }

    return (
        <Box as="form" 
        // onSubmit={handleSubmit(searchMovies)}
        >
            <Label htmlFor="searchMovies">Movie</Label>
            <Input
                name="searchMovies"
                placeholder="Search movie..."
                ref={register({ required: true })}
                onChange={handleChange}
            />
            {errors.searchMovies && <p>Required</p>}
            <Button>Search</Button>
        </Box>
    )
}

export default SearchBar;