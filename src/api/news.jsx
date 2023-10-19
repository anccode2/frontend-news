import axios from "axios";

const URL = import.meta.env.VITE_API || "http://localhost:8000/api/news";

export const fetchNews = () => axios.get(URL);

export const searchNews = (latter) => axios.get(`${URL}/${latter}`);