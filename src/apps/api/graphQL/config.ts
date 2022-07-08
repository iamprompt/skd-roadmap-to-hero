import axios from 'axios'

const SKDInstace = axios.create({
  baseURL: 'https://api.soylatte.skooldio.com/',
})

export const query = (query: any) => {
  return SKDInstace.post('/store/graphql', query)
}
