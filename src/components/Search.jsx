import { useEffect, useState } from 'react';
import MovieGrid from './MovieGrid';
import { API_KEY } from '../../apikey';

function Search({ searchTerm }) {
    console.log(searchTerm);

    const [result, setResults] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // api call based on search term
    const fetchResults = (searchTerm) => {

        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
        )
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setResults(res.results)
                setLoaded(true)

            });
    }


    useEffect(() => {
        fetchResults(searchTerm)
    }, []);

    return (
        <section>
            {loaded ? <MovieGrid results={result} />
                                    // error
                : <div className="loading">Loading...</div>
            }

        </section>
    );
}

export default Search;