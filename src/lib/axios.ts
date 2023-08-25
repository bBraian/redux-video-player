import axios from "axios";

export const api = axios.create({
    baseURL: 'https://redux-video-player-server.vercel.app'
})