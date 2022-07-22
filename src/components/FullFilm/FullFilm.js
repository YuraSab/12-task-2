import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {movieService} from "../../services";
import {LoadingPage} from "../../pages/loading";


export const FullFilm = ()=> {

    let { id } = useParams();
    // console.log(id);

    const [fullFilm, setFullFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const fetchFullFilm = async () => {
        try {
            setIsLoading(true);
            const data = await movieService.getFilmById(id);
            setFullFilm(data);
            // console.log(data);
        }catch (e){
            console.error(e);
        }finally {
            setIsLoading(false);
        }
    }



    useEffect(() => {
        fetchFullFilm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    // const {poster_path, vote_count, vote_average, release_date, overview, original_title, movieGenresList} = fullFilm;


    if(isLoading || isLoading === null) {
        return (
            <LoadingPage/>
        )
    }


    return(
        <div>
            <h1>{fullFilm.original_title}</h1>
            <h1>{fullFilm.genres.map((el) => (<span>{el.name}</span>))}</h1>
            <h1>{fullFilm.tagline}</h1>
            <p>{fullFilm.overview}</p>
        </div>
    )
};