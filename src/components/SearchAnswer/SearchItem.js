import React from "react";
import styles from "../Film/Film.module.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

export const SearchItem = ({film}) => {


    const {
        poster_path,
        // vote_count,
        // vote_average,
        // release_date,
        // overview,
        original_title,
        id,
        movieGenresList,
    } = film;


    return (
        <Link style={{textDecoration: 'none'}} to={`/${id}`}>
            <div className={styles.borders}>
                <div className={styles.photo}>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}`}/>
                </div>
                <div className={styles.title}>
                    <h2>{original_title}</h2>
                    {/*<h2>*/}
                    {/*    {movieGenresList.map(({name, id}, i) =>(*/}
                    {/*        <span key={id}>*/}
                    {/*    {name}{i < movieGenresList.length - 1 && " - "}*/}
                    {/*</span>*/}
                    {/*    ))}*/}
                    {/*</h2>*/}
                    {/*<span>Rating: {vote_average} (total votes: {vote_count})</span>*/}
                    {/*<p>{overview}</p>*/}
                    {/*<span>Realise date: {release_date}</span>*/}
                </div>
                {/*<div className={styles.genres}>*/}

                {/*    <h3>*/}
                {/*        <div style={{height: 40, textDecoration: "underline"}}>*/}
                {/*            Genres:*/}
                {/*        </div>*/}
                {/*        {*/}
                {/*            movieGenresList.map(el => {*/}
                {/*                return (*/}
                {/*                    <div key={el.id} style={{height: 40}}>*/}
                {/*                        {el.name}*/}
                {/*                    </div>*/}
                {/*                )*/}
                {/*            })*/}
                {/*        }*/}
                {/*    </h3>*/}
                {/*</div>*/}
            </div>
        </Link>
    )
}