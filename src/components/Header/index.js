import './style.css';
import {Link} from 'react-router-dom';

function Header(params) {
  return(
    <header>
      <Link className='logo' to="/">Prime Flix</Link>
      <Link className='favoritos' to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header;