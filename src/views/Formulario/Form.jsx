import { Navbar } from "../../components/Navbar/Navbar"

export const Form = () => {
  return (
    <> 
        <Navbar/>
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
            <h2>Registrar Libro</h2>
            <form className="form col-11 col-sm-6 col-lg-4">
                <label className="form-label">Titulo</label>
                <input type="text" className="form-control"/>

                <label className="form-label">Autor</label>
                <input type="text" className="form-control"/>

                <label className="form-label">Isbn</label>
                <input type="text" className="form-control"/>

                <label className="form-label">Editorial</label>
                <input type="text" className="form-control"/>

                <label className="form-label">Fecha Publicacion</label>
                <input type="date" className="form-control"/>

                <label className="form-label">Portada</label>
                <input type="file" className="form-control"/>

                <label className="form-label">Genero</label>
                <input type="text" className="form-control"/>

                <input type="submit" value='Registrar' className="btn btn-outline-success my-3 col-12" />
            </form>
        </div>
    </>
  )
}
