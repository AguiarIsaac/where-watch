import { CardElement, Content } from "./styles";

interface CardProps {
  background: string,
  streams: {
    name: string,
    icon: string
  }[],
  title: string,
  launch: string,
  genders: string [],
  duration: string,
  sinopse: string
}

export function Card({background, streams, title, launch, genders,duration, sinopse}: CardProps) {
  return (
    <CardElement>
      <img src={background} alt={title} />

      <Content>
        <span>
          Disponivel no:
          {streams.map(stream => {
            return <a key={stream.name}>
              <img src={stream.icon} alt={stream.name} />
            </a>
          })}  
        </span>

        <h4>{title}</h4>
        <small>{launch} * {genders.map(gender => { return gender})} * {duration}</small>
        <h5>Sinopse</h5>
        <p>{sinopse}</p>
      </Content>
    </CardElement>
  )
}