import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from '../src/components/Character';
import styled from 'styled-components';

const H = styled.h1`
font-size: 4rem;
  text-shadow: 3px 3px 3px blue;
  color:white;
  font-family: 'Indie Flower', cursive;
  position: fixed;
  text-align:center;

`;


const App = () => {
  const [characters, setCharacters]= useState([]);
  console.log("Characters", characters[0])


  useEffect(()=>{
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => setCharacters(response.data.results))
    .catch(error =>console.log('AWW!', error))
  },[])

  return (
   <div className='App'>
      <H>Characters</H>

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