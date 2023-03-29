import axios from "axios";
import { CardElement, Content } from "./styles";
const apiKey = process.env.VITE_TMDB_API_KEY

interface CardProps {
  id: number,
  background: string,
  title: string,
  genders: string [],
  sinopse: string
}

export function Card({id, background, title, genders, sinopse}: CardProps) {

  axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`)
    .then(response => {
      // console.log(response.data.results.AD.flatrate[0].provider_name)
      //BR significa a localidade
      console.log(response.data.results.BR)
    })
    .catch(error => {
      console.log(error.message)
    })

  return (
    <CardElement>
      <img src={background} alt={title} />

      <Content>
        <span>
          Disponivel no:
        </span>

          <h4>{title}</h4>
          <p>{sinopse}</p>
      </Content>
    </CardElement>
  )
}