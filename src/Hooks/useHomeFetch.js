
import { useEffect, useState } from 'react'
import API from '../API'

const initialState = {
    page: 0,
    results: [],
    total_page: 0,
    total_result: 0

}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [Loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [IsLoadingMore, setIsLoadingMore] = useState(false)

    const fetchMovie = async (page, searchTerm = "") => {
        try {
            setError(false)
            setLoading(true)
            // API Distracting here
            const movies = await API.fetchMovies(searchTerm, page)
            // API Distracting here
            // console.log(movies);


            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]

            }))
        }
        catch (error) {
            setError(true)
        }

        setLoading(false)
    }

    // search & initialState

    useEffect(() => {
        setState(initialState)
        fetchMovie(1, searchTerm)
    }, [searchTerm])


    useEffect(() => {
        if (!IsLoadingMore) {
            return;
        }
        fetchMovie(state.page + 1, searchTerm)
        setIsLoadingMore(false)
    }, [IsLoadingMore, searchTerm, state.page])

    return { state, Loading, error, searchTerm, setSearchTerm, setIsLoadingMore }

}