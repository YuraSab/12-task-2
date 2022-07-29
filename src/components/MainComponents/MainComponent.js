import React from "react";
import {Outlet} from "react-router-dom";

export const MainComponent = () => {
    return(
        <div>
            <Outlet/>
        </div>
    )
}