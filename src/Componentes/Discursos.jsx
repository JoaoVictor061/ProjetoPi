  import React, { useEffect, useState } from 'react'
import {  Form, Row, Container, Button } from 'react-bootstrap'
import apiDeputados from './service/apiDeputados';
import { Chart } from "react-google-charts";
import Menu from './Menu';

export const data = [
    ["Discurso", "", ""],
    ["2014", 500, 1000],
    ["2015", 500, 1000],
    ["2016", 500, 1000],
    ["2018", 500, 1000],
    ["2019", 500, 1000],
  ];
  
  export const options = {
    title: "Discursos de Deputados",
    chartArea: { width: "50%" },
    colors: ["#b0120a", ""],
    hAxis: {
      title: "Total de Discursos",
      minValue: 0,
    },
    vAxis: {
      title: "Discursos",
    },
  };
const Discurso = () => {
  
    const [deputados, setDeputados] = useState([])

    useEffect(() => {

        apiDeputados.get('deputados').then(resultado => {
            setDeputados(resultado.data.dados)
        })

    }, [])

  return (
    <>

    <div>
      <Menu />

    </div>
    <Container>
    <h1>Discurso</h1>
    <Row  >
    <Form.Group className="mb3-">

    <Form.Label>Selecione o Deputado(a)</Form.Label>  
        <Form.Select>

        <option>Selecione o Deputado(a)</option>
        {deputados.map(item => ( <option value = {item.id}>{item.nome} - {item.siglaPartido}</option>
         ))}

        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3" >
        <Form.Label>Selecione a Data do Discurso</Form.Label>
        <Form.Select>
        <option>Selecione a Data</option>
        {deputados.map(item => ( <option value={item.id}>{item.nome}-{item.siglaPartido}</option>
         ))}
        </Form.Select>
    </Form.Group>
    <Form.Group className="mb-3">
        <Button variant="outline-success">Pesquisar</Button>
    </Form.Group>

    </Row>
          
      <h1>
       Grafico  
      </h1>
    </Container>
    <div>
           <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
       </div>
    </>
  )
}
        
export default Discurso