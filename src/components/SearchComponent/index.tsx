import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormElement } from './styles'
import movie from '../../assets/cinema.webp'

const queryFormSchema = z.object({
  query: z
    .string()
    .min(3, {message: 'Digite ao menos 3 caracteres.'})
    .transform((query) => query.replace(/ /g, '%20'))
    .transform((query) => query.toLocaleLowerCase())
})

interface SearchProps {
  functionGetMovie: (query: string) => void
}

type QueryFormData = z.infer<typeof queryFormSchema>

export function SearchComponent({functionGetMovie}: SearchProps) {
  
  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm<QueryFormData>({ resolver: zodResolver(queryFormSchema)})

  function handleSearch(data: QueryFormData) {
    functionGetMovie(data.query)
    reset()
  }
  return (
    <FormElement onSubmit={handleSubmit(handleSearch)}>
      <span>
        <img src={movie}/>
        <h2>Onde Assistir</h2>
      </span>
      
      <div>
        <input {...register('query')} required type="text" placeholder='Filmes ou Séries...'/>

        <button type="submit">Buscar</button>
      </div>
    </FormElement>
  )
}