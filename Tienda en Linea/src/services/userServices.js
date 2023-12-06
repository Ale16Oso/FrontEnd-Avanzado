import axios from "axios";

const BASE_URL = 'http://localhost:3000'

const loginUserService = (data) => {
    return axios.post(`${BASE_URL}/login`, data)
}

const registerUserService = (data) => {
    return axios.post(`${BASE_URL}/register`, data)
}

export {
    loginUserService,
    registerUserService
}