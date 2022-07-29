import React from 'react';
import {Film} from "../Film";
import styles from "./Films.module.css";

export const Films = ({films}) => {

    return (
        <div className={styles.list}>
            {
                films.map(value => (

                    <div
                        key = {value.id}
                        className={styles.item}
                    >
                        <Film
                            film={value}
                        />
                    </div>
                ))
            }
        </div>
    );
};