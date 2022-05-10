import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inicio from './Componentes/Inicio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profissao from './Componentes/Profissao';
import Tela2 from './Componentes/Tela2';
import Discursos from './Componentes/Discursos';

function App() {
  return (
    <>

    <BrowserRouter>

      <Routes>
        <Route path='/' element= { <Inicio texto={true}/>} />
        <Route path='/Tela2' element= { <Tela2/>}  />
        <Route path='/Profissao' element= {<Profissao/>}  />
        <Route path='/Discursos' element= {<Discursos/>}  />
      </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
