import { useEffect, useState } from "react"
import { StreamingContent } from "./styles"

interface StreammingProps {
  icon: string
  name: string
}

const linksProviders = {
  HBO: 'https://www.hbomax.com/br/pt',
  NETFLIX: 'https://www.netflix.com/browse',
  DISNEY: 'https://www.disneyplus.com/pt-br',
  PRIME: 'https://www.primevideo.com/',
  APPLETV: 'https://tv.apple.com/br/',
  GLOBOPLAY: 'https://globoplay.globo.com/',
  STARPLUS: 'https://www.starplus.com/pt-br',
  CLARO: 'https://www.clarotvmais.com.br/home-landing',
  PARAMOUNTPLUS: 'https://www.paramountplus.com/br/',
  OI: 'https://www.oiplay.tv/oiplay/',
  TELECINE: 'https://www.telecine.com.br/',
  ONDFLIX: 'https://www.oldflix.com.br/',
  GOOGLE: 'https://www.google.com/'
}

export function StreammingIcon({icon, name}: StreammingProps) {
  const [link, setLink] = useState('')
  
  function validateLink(name: string) {
    switch(name) {
      case 'HBO Max':
        return linksProviders.HBO;
      break;
      case 'Netflix':
        return linksProviders.NETFLIX;
      break;
      case 'Amazon Prime Video':
        return linksProviders.PRIME
      break;
      case 'Claro video':
        return linksProviders.CLARO
      break;
      case 'Paramount Plus':
        return linksProviders.PARAMOUNTPLUS
      break;
      case 'NOW':
        return linksProviders.CLARO
      break;
      case 'Star Plus':
        return linksProviders.STARPLUS
      break;
      case 'Disney Plus':
        return linksProviders.DISNEY
      break;
      case 'Oi Play':
        return linksProviders.OI
      break;
      case 'Globoplay':
        return linksProviders.GLOBOPLAY
      break;
      case 'Telecine Play':
        return linksProviders.TELECINE
      break
      case 'Oldflix':
        return linksProviders.ONDFLIX
      default:
        return '#'
      break
    }
  }

  useEffect(() => {
    const linkResult = validateLink(name);
    
    linkResult ? setLink(linkResult) : console.log('error')
  }, [name]);
  
  
  return (
    <StreamingContent href={link} title={name}>
      <img src={icon} alt={name} />
    </StreamingContent>
  )
}