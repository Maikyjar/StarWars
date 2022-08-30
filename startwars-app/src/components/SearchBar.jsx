import React, { useState } from "react";
import './SearchBar.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

//Componente con las opciones de filtrado y la barra de busqueda
export default function SearchBar({onSearch}) {
    const [filter, setFilter] = useState("");
    const [select, setSelect] = useState('');

    const handleChangeSelect = (e) => {
        e.preventDefault();
        setSelect(e.target.value);
    }

    return (
        <>
            <div class="d-md-flex" style={{"min-width": "180px" }}>
                <Navbar.Brand class="text-light" >Filter By: </Navbar.Brand>
                <Form.Select aria-label="Default select example"
                    onChange={handleChangeSelect}
                >
                    <option value={"name"}>
                        Name
                    </option>
                    <option value={'height'}>
                        Height
                    </option>
                    <option value={'mass'}>
                        Mass
                    </option>
                </Form.Select>
            </div>
            <Form className="d-flex"
                    onSubmit={(e) => {
                    e.preventDefault();
                    onSearch(filter, select);
                    setFilter('');
                }}>
                <Form.Control
                    className="input"
                    type="text"
                    placeholder={select}
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                />
                <Button variant="warning" type="submit">Search</Button>
            </Form>
        </>
    );
}