import React, {useEffect, useState} from "react";
import {genreService, movieService} from "../../services";
import {LoadingPage} from "../loading";
import {Films} from "../../components/Films";

export const Home = () => {


    const [filmList, setFilmList] = useState([]);
    const [isLoading, setIsLoading] = useState(null);





    const fetchFilms = async () => {
        try {
            const {results,
                // page,
                // total_pages,
                // total_results
            } = await movieService.getFilms();
            // console.log(results, page, total_pages, total_results)
            return results
        }catch (e){
            console.error(e);
        }
    }

    const fetchGenres = async () => {
        try {
            const {genres} = await genreService.getGenres();
            return genres
            // console.log(data)
        }catch (e){
            console.error(e);
        }
    }


    const fetchData = async () => {
        const requests = [fetchFilms(), fetchGenres()];

        try{
            setIsLoading(true);
            const [movies, genres] = await Promise.all(requests);
            // console.log({movies, genres});

            const mergeMoviesWithGenres = movies.map((movie) => {
                const {genre_ids} = movie;
                const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));

                return {
                    ...movie,
                    movieGenresList
                }
            })
            setFilmList(mergeMoviesWithGenres);

        }catch (e){
            console.error(e);
        }finally {
            setIsLoading(false);
        }
    }



    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])







    return(
        <div>
            {
                isLoading === null || isLoading ? <LoadingPage/> : <Films films={filmList}/>
            }
        </div>
    )
}