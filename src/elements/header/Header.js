import {Link} from "react-router-dom";
import styles from "./Header.module.css";




export const Header = ({headerB, changeC, fontC}) => {
    return(
        <div className={styles.main} style={{background: headerB[0]}}>
            <Link className={styles.link} to={`/`} style={{color: fontC}}>Films</Link>
            <div className={styles.link} style={{paddingRight: 900, color: fontC}}>
                TEST CINEMA
            </div>

            <button  onClick={changeC} style={{fontSize: 22, fontWeight: "bold", fontStyle: "normal",color: headerB[0], background: fontC, borderWidth: 2, borderStyle: "solid", height: 50, width: 200, marginRight: 80, borderRadius: 12}} >
                Switch color
            </button>
        </div>
    )
}