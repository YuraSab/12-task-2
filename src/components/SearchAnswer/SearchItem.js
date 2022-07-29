import React from "react";
import styles from "../Film/Film.module.css";
import {Link} from "react-router-dom";

export const SearchItem = ({film}) => {

    const {
        poster_path,
        original_title,
        id,
    } = film;

    return (
        <Link style={{textDecoration: 'none'}} to={`/${id}`}>
            <div className={styles.borders}>
                <div className={styles.photo}>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title}`}/>
                </div>
                <div className={styles.title}>
                    <h2>{original_title}</h2>
                </div>
            </div>
        </Link>
    )
}