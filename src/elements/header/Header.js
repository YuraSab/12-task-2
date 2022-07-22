import {Link} from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
    return(
        <div className={styles.main}>
            <Link className={styles.link} to={`/`}>Films</Link>
            <div className={styles.link} style={{paddingRight: 900}}>
                TEST CINEMA
            </div>
        </div>
    )
}