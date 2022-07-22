import {Route, Routes} from "react-router-dom";
import {MainComponent} from "../../components/MainComponents";
import {FullFilm} from "../../components/FullFilm";
import {Home} from "../../pages";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

export const MainLayout = () => {


    return(
        <div style={{margin: 10}}>
            <Routes>

                <Route path={'/'} element={<MainComponent/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'*'} element={<Home/>}/>
                    <Route path={`/:id`} key={generateUniqueID} element={<FullFilm key={generateUniqueID}/>}/>
                </Route>
            </Routes>
        </div>
    )
}