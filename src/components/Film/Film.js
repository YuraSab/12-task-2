import React from "react";
import {Link} from "react-router-dom";
import styles from "./Film.module.css";

export const Film = ({film}) => {

    const {
        poster_path,
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
                </div>
                <div className={styles.genres}>

                    <h3>
                        <div style={{height: 40, textDecoration: "underline"}}>
                            Genres:
                        </div>
                        {
                            movieGenresList.map(el => {
                                return (
                                    <div key={el.id} style={{height: 40}}>
                                        {el.name}
                                    </div>
                                )
                            })
                        }
                    </h3>
                </div>
            </div>
        </Link>
    )
}