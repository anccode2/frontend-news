import  { useState, useEffect } from 'react';
import { fetchNews } from '../api/news';  // Asegúrate de que la ruta sea correcta

function NewsCard() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener los datos de la API
    fetchNews()
      .then((response) => {
        // Actualiza el estado con los datos de la API
        setNewsData(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {newsData.map((newsItem, index) => (
          <li key={index}>
            <h2>{newsItem.Titulo}</h2>
            <p>{newsItem.Descripcion}</p>
            <p>Fecha: {newsItem.Fecha}</p>
            <a href={newsItem.Url}>Leer más</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsCard;
