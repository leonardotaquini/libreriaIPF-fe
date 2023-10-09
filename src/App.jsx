import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './views/Home/Home'
import { Form } from './views/Formulario/Form'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/libro/registro' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
