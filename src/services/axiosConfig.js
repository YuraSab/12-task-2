import axios from "axios";


export const AXIOS = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGFiYWY0ODA5ZTMwNzE1MjM4NGI1ZDE4ZmY5YTMxYyIsInN1YiI6IjYyZDY1YzlhMmFmYjI1MDQzZDZjZDAzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cKRBmys9EyRRM_BRb0hE_7mJ7aaExBu4xkQHXx-a8k0'

    }
})
