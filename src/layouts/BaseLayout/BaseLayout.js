import React from "react";
import styles from "./BaseLayout.module.css";
import {Header} from "../../elements/header";
import {Footer} from "../../elements/Footer";


export const BaseLayout = ({children}) => {


    return (
        <div className={styles.bl}>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}