import axios from 'axios'


const apiKey = process.env.VITE_TMDB_API_KEY

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=pt-BR&query=`,
})

export const apiGetImage = axios.create({
  baseURL:'https://image.tmdb.org/t/p/original'
})

export const apiGetProviders = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/6479/watch/providers?api_key='
})