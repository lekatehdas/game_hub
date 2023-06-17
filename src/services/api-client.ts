import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2f35c75a180e488ab7c52a24413dad40'
    }
})