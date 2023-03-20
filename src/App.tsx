import { useEffect, useState } from "react";
import { ResultComponent } from "./components/ResultComponent";
import { SearchComponent } from "./components/SearchComponent";
import { MainComponent } from "./styles/styles";
import axios from 'axios'

const apiKey = process.env.VITE_TMDB_API_KEY

export function App() {

  const [ movies, setMovies  ] = useState<number[]>([])
  const [ series, setSeries  ] = useState<number[]>([])
  
  async function GetResults(query: string) {


    await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}&page=1&include_adult=false`)
      .then(response => {

        const moviesIds = response.data.results.map((item: any) => {
          return item.id
        })

        setMovies(moviesIds)
      })
      .catch(error => {
        console.error(error)
    })

    await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&page=1&query=${query}&include_adult=false`)
      .then(response => {
        
        const seriesIds = response.data.results.map((item: any) => {
          return item.id 
        })

        setSeries(seriesIds)
      })
      .catch(error => {
        console.error(error)
    })
  }

  return (
    <MainComponent>
      <SearchComponent functionGetMovie={GetResults}/>
      <ResultComponent listMovies={movies} listSeries={series}/>
    </MainComponent>
  )
}
