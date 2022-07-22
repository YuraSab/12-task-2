import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {genreService, movieService} from "../../services";
import {LoadingPage} from "../../pages/loading";
import styles from "./FullFilmModule.css";

export const FullFilm = () => {

    let {id} = useParams();
    // console.log(id);

    const [fullFilm, setFullFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const fetchFullFilm = async () => {
        try {
            setIsLoading(true);
            const data = await movieService.getFilmById(id);
            setFullFilm(data);
            console.log(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    // const fetchGenres = async () => {
    //     try {
    //         const {genres} = await genreService.getGenres();
    //         return genres
    //         // console.log(data)
    //     }catch (e){
    //         console.error(e);
    //     }
    // }


    // const fetchData = async () => {
    //     const requests = [fetchFilms(), fetchGenres()];
    //
    //     try{
    //         setIsLoading(true);
    //         const [movies, genres] = await Promise.all(requests);
    //         // console.log({movies, genres});
    //
    //         const mergeMoviesWithGenres = movies.map((movie) => {
    //             const {genre_ids} = movie;
    //             const movieGenresList = genre_ids.map(genreId => genres.find(el => el.id === genreId));
    //
    //             return {
    //                 ...movie,
    //                 movieGenresList
    //             }
    //         })
    //         setFilmList(mergeMoviesWithGenres);
    //
    //     }catch (e){
    //         console.error(e);
    //     }finally {
    //         setIsLoading(false);
    //     }
    // }



    useEffect(() => {
        fetchFullFilm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const {poster_path, vote_count, vote_average, release_date, overview, original_title, movieGenresList} = fullFilm;

    // adult: false
    // backdrop_path: "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg"
    // genre_ids: (3) [12, 28, 878]
    // id: 507086
    // original_language: "en"
    // original_title: "Jurassic World Dominion"
    // overview: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures."
    // popularity: 11579.18
    // poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg"
    // release_date: "2022-06-01"
    // title: "Jurassic World Dominion"
    // video: false
    // vote_average: 7
    // vote_count: 1794


    if (isLoading || isLoading === null) {
        return (
            <LoadingPage/>
        )
    }


    return (
        <div>
            <h1>{fullFilm.original_title}</h1>

            <div className={styles.imgAndDescription}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w200${fullFilm.poster_path}`}
                         alt={`${fullFilm.original_title}`}
                    />
                </div>
                {/*<div>*/}
                {/*    {fullFilm.movieGenresList.map(({name, id}, i) => (*/}
                {/*        <span key={id}>*/}
                {/*            {name}{i < fullFilm.movieGenresList.length - 1 && " - "}*/}
                {/*        </span>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>


            <h1>{fullFilm.genres.map((el) => (<span>{el.name}</span>))}</h1>
            <h1>{fullFilm.tagline}</h1>
            <p>{fullFilm.overview}</p>
        </div>
    )
};