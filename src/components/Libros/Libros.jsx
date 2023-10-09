import { Libro } from '../Libro/Libro';
import { getLibros } from '../../helpers/librosAxios';
import { useEffect, useState } from 'react';

export const Libros = () => {

  const [libros, setLibros] = useState([]);

  const getLibrosDb = async () => {
      const data = await getLibros();
      setLibros(data)
  }

  useEffect(() => {
    getLibrosDb();
  }, [])
  
  return (
    <div className='d-flex justify-content-center align-items-center wrap border flex-column flex-sm-row flex-lg-row'>
      {
        libros.length > 0
          ? libros.map((libro, i) => <Libro key={i} libro={libro} />)
          : <span className='alert alert-info w-100'>No hay libros</span>
      }
    </div>
  )
}
