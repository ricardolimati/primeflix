import { useEffect, useState} from 'react';
import api from '../../services/api';

function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get('movie/now_playing', {
        params: {
          api_key: '42c4ea0863b8ed5244b98f5b917baa5e',
          language: 'pt-BR',
          page: 1,
        }
      })
      console.log(response.data.results);
    }
    loadFilmes();


  }, [])

  return(
    <div>
      <h1>Bem Vindo a Home!</h1>
    </div>
  )
}

export default Home;