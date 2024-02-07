import axios from "axios"
class AuthService {

    constructor() {
        this.api = axios.create({
            baseURL: `http://localhost:5005/`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    signup(userData) {
        return this.api.post('/auth/signup', userData)
    }

    login(userData) {
        return this.api.post('/auth/login', userData)
    }

    verify(authToken) {
        return this.api.get('/auth/verify', {
            headers: { Authorization: `Bearer ${authToken}` }
        })
    }

}

const authService = new AuthService()
export default authService