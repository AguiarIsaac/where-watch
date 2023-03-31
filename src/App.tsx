import { useState } from "react";
import { ResultComponent } from "./components/ResultComponent";
import { SearchComponent } from "./components/SearchComponent";
import { MainComponent } from "./styles/styles";
import axios from 'axios'

const apiKey = process.env.VITE_TMDB_API_KEY

interface ResultProps {
  id: number,
  mediaType: string
}[]

export function App() {

  const [ result, setResult ] = useState<ResultProps[]>([])
  const [ notfound, setNotFound ] = useState('')

  async function GetResults(query: string) {

    await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}&include_adult=false`)
      .then(response => {

        const checkResults = response.data.total_results

        if(checkResults === 0) {
          setNotFound('Ops! Numhum registro encontrado.')  
        } else {
          
          const results = response.data.results.map((item: any) => {
            return {
              id: item.id,
              mediaType: item.media_type
            }
          })
          console.log(results)
          setResult(results)
        }

      })
      .catch(error => {
        console.error(error)
    })
  }

  return (
    <MainComponent>
      <SearchComponent functionGetMovie={GetResults}/>
      <ResultComponent listResults={result} notFound={notfound}/>
    </MainComponent>
  )
}
