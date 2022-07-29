import React from "react";
import styles from "../Films/Films.module.css";
import {SearchItem} from "./SearchItem";


export const SearchAnswer = ({films}) => {

    return(
        <div className={styles.list}>
            {
                films.map(value => (

                    <div
                        key={value.id}
                        className={styles.item}
                    >
                        <SearchItem
                            film={value}
                        />
                    </div>
                ))
            }
        </div>
    )
};