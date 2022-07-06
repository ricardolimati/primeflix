import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '42c4ea0863b8ed5244b98f5b917baa5e',
          language: 'pt-BR',
        }
      }).then((response) => {
        setFilme(response.data);
      }).catch(() => {
        console.log('filme não encontrado')
      })
    }
    loadFilme();
    return () => {
      console.log("Componente foi desmontado!");
    }
  }, [])

  if (!loading) {
    return (
      <div className='filme-info'>
        <h2>Carregando filme...</h2>
      </div>
    )
  }
  return (
    <div className='filme-info'>
      <h1>{filme.title}</h1>
      <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
      <h3>Sinopse:</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} / <small>10</small></strong>
      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a href="#">
            Trailer
          </a>
        </button>
      </div>
    </div >
  )
}

export default Filme;