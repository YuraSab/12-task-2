import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {useEffect} from "react";
import {LoadingPage} from "../../pages/loading";
import styles from "../FullFilm/FullFilm.module.css";


export const FullOfSearch = () => {

    let {id} = useParams();

    const [fullFilm, setFullFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const fetchFullFilm = async () => {
        try {
            setIsLoading(true);
            const data = await movieService.getFilmById(id);

            setFullFilm(data);
            // console.log(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {

        fetchFullFilm()
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
        <div className={styles.main} style={{color: "black"}}>

            <div className={styles.title}>
                <h1>{fullFilm.original_title}</h1>
            </div>

            <div className={styles.image}>

                <img src={`https://image.tmdb.org/t/p/w300${fullFilm.poster_path}`}
                     alt={`${fullFilm.original_title}`}
                />
            </div>
            <div className={styles.description}>
                <h3>
                    Date: {fullFilm.release_date}
                </h3>
                <h3>
                    Rating: {fullFilm.vote_average} (voted: {fullFilm.vote_count})
                </h3>
            </div>
            <div className={styles.text}>
                <h3>Description:</h3>
                <h3>{fullFilm.overview}</h3>
            </div>



        </div>
    )
}