import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Inicio from './Inicio';
import "./Pages.css";
import 'animate.css';

const Tela2 = (props) => {
  return (
    <Container>
        <div className="position-absolute top-0 start-0">
            <Button className="bt-option btum">
              <Link to="" ><h1 className="Textlink">Informações Pessoais</h1> </Link>
            </Button>
        </div>
        <div className="position-absolute top-0 start-50 translate-middle-x">
            <Button className="bt-option btum">
              <Link to="" ><h1 className="Textlink">Despesas</h1> </Link>
            </Button>
        </div>
        <div className="position-absolute top-0 end-0">
            <Button className="bt-option btum">
              <Link to="" ><h1 className="Textlink">Eventos</h1> </Link>
            </Button>
        </div>

      <div className='row'>
          <div className='col'>
            <Inicio/>
          </div>
      </div>

        <div className='position-absolute bottom-0 start-0'>
            <Button className="bt-option btum">
              <Link to="" ><h1 className="Textlink">Bancadas</h1> </Link>
            </Button>
        </div>

        <div className='position-absolute bottom-0 start-50 translate-middle-x'>
          <Link to="/Profissao" >
            <Button className="bt-option btum">
              <h1 className="Textlink">Profissões</h1>
            </Button>
          </Link>
        </div>
        <div className='position-absolute bottom-0 end-0'>
            <Button className="bt-option btum">
              <Link to="/Discursos" ><h1 className="Textlink">Discursos</h1> </Link>
            </Button>
        </div>


    </Container>
  )
}

export default Tela2