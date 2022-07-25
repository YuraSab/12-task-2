import React, {useState} from "react";
import styles from "./BaseLayout.module.css";
import {Header} from "../../elements/header";
import {Footer} from "../../elements/Footer";
import {MainLayout} from "../MainLayout";


export const BaseLayout = (
    // {children}
) => {

    const [headerBackGround, setHeaderBackground] = useState('black');
    const [mainBackGround, setMainBackground] = useState('white');
    const [fontColor, setFontColor] = useState('white');

    const changeColor = () => {
        if(headerBackGround === 'black'){
            setHeaderBackground('silver');
            setMainBackground('silver');
            setFontColor('black');
        }
        else if(headerBackGround === 'silver'){
            setHeaderBackground('white');
            setMainBackground('white');
            setFontColor('black');
        }

        else if(headerBackGround === 'white'){
            setHeaderBackground('black');
            setMainBackground('white');
            setFontColor('white');
        }
        // console.log('header: ', headerBackGround);
        // console.log('main: ', mainBackGround);
    }


    const headerBC = [headerBackGround, mainBackGround];
    const MainBC = [mainBackGround, headerBackGround];


    return (
        <div className={styles.bl}>
            <header>
                <Header headerB={headerBC} changeC={changeColor} fontC={fontColor}/>
            </header>
            <main>

                <MainLayout MainB={MainBC}/>

                {/*MainB = {MainBC}*/}
                {/*{children}*/}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}