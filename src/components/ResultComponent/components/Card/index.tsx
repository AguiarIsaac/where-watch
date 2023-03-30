import axios from "axios";
import { spawn } from "child_process";
import { useState } from "react";
import { StreammingIcon } from "../StreammingIcon";
import { CardElement, Content, StreammingList } from "./styles";
const apiKey = process.env.VITE_TMDB_API_KEY

interface CardProps {
  id: number,
  background: string,
  title: string,
  genders: string [],
  sinopse: string
}

interface ProviderProps {
  logo: string,
  streaming: string
}[]

export function Card({id, background, title, genders, sinopse}: CardProps) {

  const [providers, setProviders] = useState<ProviderProps[]>([])

  axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`)
    .then(response => {
      // console.log(response.data.results.AD.flatrate[0].provider_name)
      //BR significa a localidade
      // console.log(response.data.results.BR)

      const whacthProviers = response.data.results.BR.flatrate

      if(whacthProviers) {
        const providersFormateds = whacthProviers.map((item: any) => {
          return {
            streaming: item.provider_name,
            logo: 'https://image.tmdb.org/t/p/original' + item.logo_path
          }
        })

        setProviders(providersFormateds)
      }

    })
    .catch(error => {
      console.log(error.message)
    })

  return (
    <CardElement>
      <img src={background} alt={title} />

      <Content>
        <span>disponível no: </span>
        <StreammingList>
          {providers.length > 0 ? providers.map(provider => {
              return (
                <StreammingIcon
                  icon={provider.logo}
                  name={provider.streaming}
                  key={provider.streaming}
                />
              )
            }): <small className="error">Ops! não consta nenhum dado de straming disponível</small>}
        </StreammingList>
          <h4>{title}</h4>
          <p>{sinopse}</p>
      </Content>
    </CardElement>
  )
}