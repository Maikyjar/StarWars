import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav.jsx';
import Cards from './components/Cards.jsx';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

//Componente principal de la aplicacion
function App() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [data, setData] = useState({});

    //Se solicita a la API la informacion para renderizarla
    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/?page=${page}`)
            .then(response => {
                    const data = response.data
                    setCharacters(data.results)
                    setData(data)
            }).catch(console.log)
      }, [page])
    
    //Segun la caracteristica escogida se realiza el filtrado, teniendo como por defecto la busqueda por nombre
    function onSearch(value, select) {
        if(!select || select === "name") {
            axios
                .get(`https://swapi.dev/api/people/?search=${value}`)
                .then(response => {
                    const data = response.data
                    setCharacters(data.results)
                    setData(data)
                }).catch(console.log)
        }
        if(select === "height") {
            let heightFilter = characters.filter(c => c.height === value);
            setCharacters(heightFilter);
        }
        if(select === "mass") {
            let massFilter = characters.filter(c => c.mass === value);
            setCharacters(massFilter);
        }

    }

    //Cada vez que se oprimas los botones cambia el estado y por lo tanto se realiza una nueva solicitud a la API con useEffect
    function pageChange(type) {
        if(type === 'next'){
            if(data.next) {
                setPage(page + 1)
            }
        }
        if(type === 'previous'){
            if(data.previous) {
                setPage(page - 1)
            }
        }
    }
    
    //Se retorna los componentes de encabezado y los encargados de mostrar la informacion
    return (
        <Container fluid>
            <Nav onSearch={onSearch}/>
            <hr />
            <Cards characters={characters} />
            <div>
                <Button variant="primary" disabled={page <= 1 ? true : false} onClick={() => pageChange('previous')}>Previous page</Button>
                <Button variant="primary" onClick={() => pageChange('next')}>Next page</Button>
            </div>
        </Container>
    );
  }
  
  export default App;
  