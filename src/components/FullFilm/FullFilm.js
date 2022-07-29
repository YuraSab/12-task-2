import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {LoadingPage} from "../../pages/loading";
import styles from "./FullFilm.module.css";

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
};