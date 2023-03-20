import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { CardList, SectionComponent } from "./styles";

const apiKey = process.env.VITE_TMDB_API_KEY

interface ResultProps {
  listMovies: number[],
  listSeries: number[]
}
export function ResultComponent({listMovies, listSeries}: ResultProps) {

  const [ foundMovies, setFoundMovies ] = useState([] as any)

  async function getMoreInfos(listIds: number[]) {

    let moviesFiltereds: any = []
    
    for( let i = 0; i < listIds.length; i++ ) {
      await axios.get(`https://api.themoviedb.org/3/movie/${listIds[i]}?api_key=${apiKey}&language=pt-BR`)
       .then(response => {

        const movieFormated = {
          genres: response.data.genres,
          id: response.data.id,
          overview: response.data.overview,
          posterPath: response.data.poster_path,
          releaseDate: response.data.release_date,
          title: response.data.title,
          runtime: response.data.runtime
        }
        
        moviesFiltereds = [...moviesFiltereds, movieFormated]
      })

      setFoundMovies(moviesFiltereds)
    }
  }

  useEffect(() => {
    if(listMovies.length > 0) {
      
      getMoreInfos(listMovies)
    }
  },[listMovies, listSeries])


  return (
    <SectionComponent>
      <CardList>
        <Card
          background="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6urQ17k0Pepx8RoYVeRbwaCSVIS.jpg"
          streams={[{name: 'prime Video', icon:'https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg'}]}
          title="Eu Sou A Lenda"
          launch="16/12/2007"
          genders={['Ficção cientifica', 'Drama', 'Ação']}
          duration="1h 41m"
          sinopse="Robert Neville é um brilhante cientista e o único sobrevivente de uma epidemia que transformou os humanos em mutantes sedentos por sangue. Andando pela cidade de Nova York, ele procura por outros possíveis sobreviventes e tenta achar a cura da praga usando seu próprio sangue, que é imune."
        />
        {/* {props.listResults.map(result => {
          return (
            <Card
              key={result.id}
              background={result.background}
              streams={[{name: 'prime Video', icon:'https://www.themoviedb.org/t/p/original/emthp39XA2YScoYL1p0sdbAH2WA.jpg'}]}
              title={result.title}
              launch='16/12/2007'
              genders={['Ficção cientifica', 'Drama', 'Ação']}
              duration="1h 41m"
              sinopse="dfklejofije eoijf ldkfjeio fdlsfjierjfldkjf esifjldskjfiser jfldsjf kldsjf eoifj dkslj fisejf ldskfj isoe jf"
            />
          )
        })} */}
      </CardList>
    </SectionComponent>
  )
}