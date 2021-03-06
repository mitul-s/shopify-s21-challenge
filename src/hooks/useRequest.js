import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useRequest(query) {
    
    // Value is the data being stored
    const [ value, setValue ] = useState('');
    // See if we're waiting for API to respond, spinner
    const [ loading, setLoading ] = useState(false);
    // Any API errors that can occur
    const [ error, setError ] = useState({});

    // Runs whenever there's a change to query 
    useEffect(() => {
        // completion of request boolean
        let ignore = false;
        const getData = async () => {
        const url = `https://www.omdbapi.com/?s=${query}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`;
            try {
                // Spinner loading state - waiting for API response
                setLoading(true);
                // Getting data.. 
                const res = await axios(url);
                // Setting data into the results
                if(!ignore) setValue(res.data);
            } catch (error) {
                // Errors from API not responding
                setError(error);
                console.log(error);
            } finally {
                // No longer loading, render results
                setLoading(false);
            }
        }

        getData();

        return (() => {ignore = true;});
        
    }, [query])

    return { value, loading, error };
}

