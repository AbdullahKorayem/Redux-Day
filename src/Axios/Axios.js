import axios from "axios";

const API_URL_Axios = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: 'e04f3ab0aa8a65c0ee5479d7e908eeaa',

    }

})


//req
API_URL_Axios.interceptors.request.use((config) => {

    // console.log(config)

    // if (config.url == '/Movies' && config.method == 'post') {
    //     config.headers.Authorization = 'sfsfasffsa'
    // }
    return config

}, (error) => {

    return Promise.reject(error)

})


//res

API_URL_Axios.interceptors.response.use((res) => {

    return res

}, (error) => {

    return Promise.reject(error)

})



export default API_URL_Axios;





