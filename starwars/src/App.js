import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from '../src/components/Character';
import styled from 'styled-components';

const H = styled.h1`
display:flex;
justify-content:center;
font-size: 4rem;
  text-shadow: 3px 3px 3px blue;
  color:white;
  text-align:center;
`;

const App = () => {
  const [characters, setCharacters]= useState([]);
  

  useEffect(()=>{
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => setCharacters(response.data.results))
    .catch(error =>console.log('AWW!', error))
  },[])

  return (
   <div className='App'>
      <H>Rick & Morti </H>

      <div className='character-container'>

      {characters.map(character =>(
        <Character key={character.id} 
        name={character.name} 
        img={character.image}
        gender={character.gender} 
        status={character.status} 
        species={character.species}/>
      ))}   
</div>
    </div>
  );
}

export default App;