import React, {useEffect, useState} from "react";
import styles from "./BaseLayout.module.css";
import {Header} from "../../elements/header";
import {Footer} from "../../elements/Footer";
import {MainLayout} from "../MainLayout";
import {movieService} from "../../services";
import {key3} from "../../services/key";
import {SearchAnswer} from "../../components/SearchAnswer";
import {Films} from "../../components/Films";

export const BaseLayout = (
    // {children}
) => {


    const [headerBackGround, setHeaderBackground] = useState('black');
    const [mainBackGround, setMainBackground] = useState('white');
    const [fontColor, setFontColor] = useState('white');

    const changeColor = () => {
        if (headerBackGround === 'black') {
            setHeaderBackground('silver');
            setMainBackground('silver');
            setFontColor('black');
        } else if (headerBackGround === 'silver') {
            setHeaderBackground('white');
            setMainBackground('white');
            setFontColor('black');
        } else if (headerBackGround === 'white') {
            setHeaderBackground('black');
            setMainBackground('white');
            setFontColor('white');
        }
        // console.log('header: ', headerBackGround);
        // console.log('main: ', mainBackGround);
    }


    const headerBC = [headerBackGround, mainBackGround];
    const MainBC = [mainBackGround, headerBackGround];






    const [searchTerm, setSearchTerm] = useState('');
    const [totalResults, setTotalResults] = useState('');
    const [currentMovie, setCurrentMovie] = useState(null);
    const [searchMovies, setSearchMovies] = useState([]);

    const inputRef = React.createRef();
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
        setSearchTerm(e.target.value);
        console.log('changed on: ', e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        ///                                             movie/popular?&query=${searchWorlds}
        //           https://api.themoviedb.org/3/search/movie?api_key=
        //           eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGFiYWY0ODA5ZTMwNzE1MjM4NGI1ZDE4ZmY5YTMxYyIsInN1YiI6IjYyZDY1YzlhMmFmYjI1MDQzZDZjZDAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKRBmys9EyRRM_BRb0hE_7mJ7aaExBu4xkQHXx-a8k0
        //                                                                   &query=spider
        //           https://api.themoviedb.org/3/movie/popular?api_key=###&page=1
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key3}&query=${inputValue}`)
        // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key3}&query=${inputValue}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                setSearchMovies(data.results) ;
                setTotalResults(data.total_results);
            })
        // const {
        //             results,
        //             // page,
        //             // total_pages,
        //             // total_results
        //         } = movieService.getFilmsBySearch(inputValue);
        //         setSearchTerm(e.target.value);
        //         setSearchMovies(results);
        //         console.log(searchMovies);
    }




    return (
        <div className={styles.bl}>
            <header>
                <Header headerB={headerBC} changeC={changeColor} fontC={fontColor}/>
            </header>

            <div style={{margin: 70}}>

                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        // value={inputValue}
                        onChange={onChangeInput}
                        ref={inputRef}
                    />
                </form>
            </div>

            <main>
                {
                    totalResults > 0  ?
                        <SearchAnswer films={searchMovies}/>
                        :
                        <MainLayout MainB={MainBC}/>
                }


                {/*MainB = {MainBC}*/}
                {/*{children}*/}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}