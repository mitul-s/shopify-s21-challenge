import React from 'react';
import { useForm } from 'react-hook-form'
import { Box, Label, Input } from "theme-ui";

const SearchBar = ({ setQuery }) => {

    const { register, errors } = useForm();

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Label mb={1} color="highlight" htmlFor="search">
            Movie title
          </Label>
          <Input
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
                borderColor: 'outline',
              },
            }}
          />
          {errors.search && <p>Required</p>}
      </Box>
    );
}

export default SearchBar;