import { useState } from 'react';
import { searchNews } from '../api/news'; // Asegúrate de que la ruta sea correcta

function NavBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm) {
      // Realiza la solicitud a la API con la palabra clave al hacer clic en el botón
      searchNews(searchTerm)
        .then((response) => {
          // Actualiza el estado con los resultados de la búsqueda
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error('Error al buscar', error);
        });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <strong>Titulo:</strong> {result.Titulo}
            <br />
            <strong>Descripción:</strong> {result.Descripcion}
            <br />
            <strong>Fecha:</strong> {result.Fecha}
            <br />
            <strong>URL:</strong> <a href={result.Url}>Leer Mas</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
