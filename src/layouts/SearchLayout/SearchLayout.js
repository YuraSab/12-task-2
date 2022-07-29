import {Route, Routes} from "react-router-dom";
import {MainSearch} from "../../components/MainSearch";
import {SearchAnswer} from "../../components/SearchAnswer";
import {FullOfSearch} from "../../components/SearchAnswer/FullOfSearch";


export const SearchLayout = ({films}) => {


    return(
        <div>
            <Routes>
                <Route path={'/'} element={<MainSearch/>}>

                    <Route index element={<SearchAnswer films={films}/>}/>
                    <Route path={'*'} element={<SearchAnswer films={films}/>}/>
                    <Route path={':id'} element={<FullOfSearch/>} />
                </Route>
            </Routes>
        </div>
    )
}