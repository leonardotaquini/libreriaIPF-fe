import React from 'react'
import './libro.css'
export const Libro = ({ libro }) => {
  const { autor, editorial, fechaPublicacion, portada, genero, titulo } = libro
  return (
    <div className='card col-12 col-sm-4 col-lg-2 m-3 card-model'>
      <div className='img-container'>

        <img src='C:\\Users\\leo_t\\OneDrive\\Documentos\\tlp\\libreria\\backend\\libreriaIPF\\src/images/Captura de pantalla 2023-08-15 120510.png' className='imagen'/>
      </div>

      <div className='card-body'>
        <h3 className='card-title text-center'>{ titulo }</h3>
        <h5 className='card-text text-center small'>{ autor.nombre }</h5>
        <p className='small text-center card-text'>{ editorial }</p>
        <a href='#' className='btn btn-primary col-12'>Ver Informacion</a>
      </div>

    </div>
  )
}
