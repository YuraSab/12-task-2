import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import React, {useEffect} from "react";
import {useState} from "react";


export const Header = ({
                           headerB, changeC, fontC,
                           search

                       }) => {


    const inputRef = React.createRef();

    const [hover, setHover] = useState(false);



    return (
        <div className={styles.main} style={{background: headerB[0]}}>
            <div onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <Link className={styles.link} to={`/`} style={{color: hover ? 'blue' : fontC,}}>Films</Link>
            </div>

            <div className={styles.link} style={{color: fontC, marginLeft: 300}}>
                TEST CINEMA
            </div>


            <div style={{marginLeft: 500}}>
                {
                    search
                }
            </div>


            <div style={{marginLeft: 80}}>
                <button onClick={changeC} style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    fontStyle: "normal",
                    color: headerB[0],
                    background: fontC,
                    borderWidth: 2,
                    borderStyle: "solid",
                    height: 50,
                    width: 200,
                    marginRight: 80,
                    borderRadius: 12
                }}>
                    Switch color
                </button>

            </div>

        </div>
    )
}