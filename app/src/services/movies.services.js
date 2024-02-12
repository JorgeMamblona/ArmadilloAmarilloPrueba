import axios from "axios"
class MoviesService {

    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/api/movies`
        })
    }

    getPopular() {
        return this.api.get('/popular')
    }

    getDetails(id) {
        return this.api.get(`/details/${id}`)
    }

    getNowPlaying() {
        return this.api.get('/nowPlaying')
    }
}

const moviesService = new MoviesService()
export default moviesService