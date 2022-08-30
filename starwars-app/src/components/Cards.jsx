import React from 'react';
import './Cards.css';
import Card from './Card.jsx';
import Table from 'react-bootstrap/Table';

//Componenete que crea la tabla y define sus columnas, ademas de pasar la informacion para las filas
export default function Cards({characters}) {

  return (
    <div className='cards'>
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((c, index) => 
            <Card
            key={c.name}
            index={index}
            name={c.name}
            height={c.height}
            mass={c.mass}
            hair_color={c.hair_color}
            skin_color={c.skin_color}
            eye_color={c.eye_color}
            birth_year={c.birth_year}
            gender={c.gender}
            />
          )}
        </tbody>
      </Table>
    </div>
  );
}