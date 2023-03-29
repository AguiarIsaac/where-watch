import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { CardList, SectionComponent } from "./styles";

const apiKey = process.env.VITE_TMDB_API_KEY

interface ResultProps {
  listMovies: number[]
}
export function ResultComponent({listMovies}: ResultProps) {

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
          posterPath: 'https://image.tmdb.org/t/p/original' + response.data.poster_path,
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
  },[listMovies])


  return (
    <SectionComponent>
      <CardList>

        {foundMovies && foundMovies.map((movie: any) => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              background={movie.posterPath}            
              genders={movie.genres}
              sinopse={movie.overview}
              id={movie.id}
            />
          )
        })}
      </CardList>
    </SectionComponent>
  )
}