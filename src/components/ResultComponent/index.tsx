import axios from "axios";
import { useEffect, useState } from "react";
import { Loanding } from "../Loading";
import { Card } from "./components/Card";
import { CardList, SectionComponent } from "./styles";

const apiKey = process.env.VITE_TMDB_API_KEY

interface ResultProps {
  listMovies: number[]
}
export function ResultComponent({listMovies}: ResultProps) {

  const [ foundMovies, setFoundMovies ] = useState([] as any)
  const [ loanding, setLoanding ] = useState(false)

  async function getMoreInfos(listIds: number[]) {
    setLoanding(true)

    try {
      // aqui eu faço todas as chamadas com o map, e espero o retorno de todas com o promise.all
      const responses = await Promise.all(listIds.map(id => 
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
      ));

      const moviesFiltereds = responses.map(response => {
        return {
          genres: response.data.genres,
          id: response.data.id,
          overview: response.data.tagline,
          posterPath: 'https://image.tmdb.org/t/p/original' + response.data.poster_path,
          releaseDate: response.data.release_date,
          title: response.data.title,
          runtime: response.data.runtime
        };
      });

      setFoundMovies(moviesFiltereds);
      setLoanding(false)
    } catch (error) {

      console.error(error);
      setLoanding(false)
    }

    setLoanding(false)
  }

  useEffect(() => {
    if(listMovies.length > 0) {
      
      getMoreInfos(listMovies)
    }
  },[listMovies])


  return (
    <SectionComponent>
      <CardList>
        {loanding && <Loanding />}

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