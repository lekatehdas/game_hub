import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '78825f15cd974fa2a6c80f144849e4bf'
    }
})