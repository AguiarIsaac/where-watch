import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { FormElement } from './styles'
import movie from '../../assets/cinema.webp'

const queryFormSchema = z.object({
  query: z
    .string()
    .min(3, {message: 'Digite ao menos 3 caracteres.'})
    .transform((query) => query.replace(/ /g, '%'))
    .transform((query) => query.toLocaleLowerCase())
})

type QueryFormData = z.infer<typeof queryFormSchema>

export function SearchComponent() {
  
  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm<QueryFormData>({ resolver: zodResolver(queryFormSchema)})

  async function handleSearch(data: QueryFormData) {
    try {
      const query = data.query

      await api.get(`${query}&page=1&include_adult=false`)
        .then((response) => {
          console.log(response.data.results)
        })
        .catch((error) => {
          console.log(error.message)
        })
    } catch (error) {
      console.log(error)
    }


    reset()
  }

  const teste = process.env.TMDB_API_KEY
  console.log(teste)
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