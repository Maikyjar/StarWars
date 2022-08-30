import React, { useState } from 'react';
//import Modal from './Modal';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

//Componente que muestra los valores de cada fila al igual que el modal
export default function Card ({index, name, height, mass, hair_color, skin_color, eye_color, birth_year, gender}) {
    const [active, setActive] = useState(false);
    const handleClose = () => setActive(false);
    const handleShow = () => setActive(true);

    return (
      <>
        <tr key={index}>
            <td>{name}</td>
            <td>{height}</td>
            <td>{mass}</td>
            <td>{hair_color}</td>
            <td>
                <Button variant="primary" onClick={handleShow}>Show more</Button>
            </td>
        </tr>
        <Modal show={active} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>More information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Skin color</th>
                            <th>Eye color</th>
                            <th>Birth year</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{skin_color}</td>
                            <td>{eye_color}</td>
                            <td>{birth_year}</td>
                            <td>{gender}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
      </>
    );
};
