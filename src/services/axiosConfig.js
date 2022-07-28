import axios from "axios";
// key - 4th key on TMDB (personal page)
import {key} from "./key";

export const AXIOS = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: `Bearer ${key}`
    }
})
