import {AXIOS} from "./axiosConfig";


class MovieService{
    async getFilms() {
        const {data} = await AXIOS.get(`/discover/movie`)
        return data
    }

    async getFilmById(id) {
        const {data} = await AXIOS.get(`/movie/${id}`)
        return data
    }
}


export const movieService = new MovieService();