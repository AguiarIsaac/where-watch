import axios from "axios";
import { useEffect, useState } from "react";
import { Loanding } from "../Loading";
import { Card } from "./components/Card";
import { CardList, Credits, ErrorMessage, SectionComponent } from "./styles";
import notImg from '../../assets/smileyx.svg'
import logotmdb from '../../assets/tmdb.svg'

const apiKey = process.env.VITE_TMDB_API_KEY

interface ListResultProps {
  id: number,
  mediaType: string
}

interface ResultProps {
  listResults: ListResultProps[],
  notFound: boolean
}
export function ResultComponent({listResults, notFound}: ResultProps) {

  const [ recordsFound, setRecordsFound ] = useState([] as any)
  const [ loanding, setLoanding ] = useState(false)

  async function getMoreInfos(listIds: ListResultProps[]) {

    try {
      setLoanding(true)

      const movies = listIds.filter(movie => movie.mediaType == 'movie')
      const series = listIds.filter(serie => serie.mediaType == 'tv')
  
      const moviesResponse = await Promise.all(movies.map(movie => 
        axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=pt-BR`)
      ));

      const moviesFiltereds = moviesResponse.map(response => {
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
  
      const seriesResponse = await Promise.all(series.map(serie => 
        axios.get(`https://api.themoviedb.org/3/tv/${serie.id}?api_key=${apiKey}&language=pt-BR`)
      ));
  
      const seriesFiltereds = seriesResponse.map(response => {
        return {
          genres: response.data.genres,
          id: response.data.id,
          overview: response.data.tagline,
          posterPath: 'https://image.tmdb.org/t/p/original' + response.data.poster_path,
          releaseDate: response.data.last_air_date,
          title: response.data.name
        };
      });

      const allResults = [...moviesFiltereds, ...seriesFiltereds]

      setLoanding(false)
      setRecordsFound(allResults)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    if(listResults.length > 0) {
      setRecordsFound([])

      getMoreInfos(listResults)
    }

    if(notFound) {
      setRecordsFound([])
    }
  },[listResults, notFound])

  return (
    <SectionComponent>
      <CardList>

        {notFound === false && loanding === false && recordsFound.length === 0 && 
          <Credits>
            <img src={logotmdb} alt="Themoviedb" />
            <p>
              Agradecimentos ao The Movie Database (TMDB) pela disponibilização 
              dos dados exibidos nesta aplicação. Os dados sobre filmes, séries 
              e programas de televisão exibidos aqui são fornecidos pela API do 
              TMDB e são atualizados regularmente. Nós não somos responsáveis 
              pela criação desses dados, mas apenas pelo acesso e apresentação 
              dos mesmos em uma forma útil e atraente para nossos usuários. 
              Para mais informações sobre a base de dados do TMDB, por favor 
              visite o site deles em <a href="https://www.themoviedb.org/" target="_blanck">
                https://www.themoviedb.org
              </a>.
            </p>
          </Credits>
        }
        {loanding && <Loanding />}

        {notFound && <ErrorMessage><img src={notImg} alt="not found" /> Ops! nenhum registro encontrado</ErrorMessage>}

        {recordsFound.length > 0 && !notFound && recordsFound.map((item: any) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              background={item.posterPath}            
              genders={item.genres}
              sinopse={item.overview}
              id={item.id}
            />
          )
        })}
      </CardList>
    </SectionComponent>
  )
}