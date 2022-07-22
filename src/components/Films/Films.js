import React from 'react';
import {Film} from "../Film";

export const Films = ({films}) => {

    // console.log(films, "from FilmList")

    return (
        <div>
            {
                films.map(value => (

                    <div
                        key = {value.id}
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