import axios from "axios";
// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=42c4ea0863b8ed5244b98f5b917baa5e&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;